'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';

function formatDate(value) {
  if (!value) return '-';
  return new Date(value).toLocaleString();
}

export default function CommunityPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);
  const [form, setForm] = useState({
    category_id: '',
    title: '',
    body: '',
  });

  const loadCommunity = useCallback(async () => {
    setLoading(true);

    try {
      const [{ data: categoryRows, error: categoryError }, { data: topicRows, error: topicError }] = await Promise.all([
        supabase
          .from('community_categories')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('community_topics')
          .select('*, community_categories(name,slug), servers(id,name)')
          .neq('status', 'hidden')
          .order('pinned', { ascending: false })
          .order('last_activity_at', { ascending: false })
          .limit(50),
      ]);

      if (categoryError) throw categoryError;
      if (topicError) throw topicError;

      setCategories(categoryRows || []);
      setTopics(topicRows || []);
      setForm((current) => ({
        ...current,
        category_id: current.category_id || categoryRows?.[0]?.id || '',
      }));
    } catch (err) {
      console.error('Failed to load community:', err);
      setError('Unable to load community boards.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCommunity();
  }, [loadCommunity]);

  useEffect(() => {
    const channel = supabase
      .channel('community-board')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'community_topics' }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'community_posts' }, loadCommunity)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadCommunity]);

  const submitTopic = async (event) => {
    event.preventDefault();
    setError(null);
    setNotice(null);

    if (!user) {
      router.push('/?auth=login&redirect=/community');
      return;
    }

    try {
      const { data: topic, error: topicError } = await supabase
        .from('community_topics')
        .insert([
          {
            category_id: form.category_id || null,
            user_id: user.id,
            title: form.title,
          },
        ])
        .select()
        .single();

      if (topicError) throw topicError;

      const { error: postError } = await supabase
        .from('community_posts')
        .insert([
          {
            topic_id: topic.id,
            user_id: user.id,
            body: form.body,
          },
        ]);

      if (postError) throw postError;

      setForm((current) => ({ ...current, title: '', body: '' }));
      setNotice('Topic posted.');
      await loadCommunity();
    } catch (err) {
      console.error('Failed to create topic:', err);
      setError(err.message || 'Unable to create topic.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-6">
          <div>
            <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-950">
              Back to directory
            </Link>
            <h1 className="text-3xl font-bold text-gray-950 mt-2">Community Boards</h1>
            <p className="text-gray-600 mt-2">Discussions for server launches, support, reviews, and Open Tibia community coordination.</p>
          </div>
          <Link href="/dashboard" className="px-4 py-2 bg-white border border-gray-300 rounded text-sm font-semibold text-gray-900 hover:bg-gray-50">
            Dashboard
          </Link>
        </div>

        {notice ? <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-4">{notice}</div> : null}
        {error ? <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4">{error}</div> : null}

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
          <section className="bg-white border border-gray-200 rounded p-4 h-fit">
            <h2 className="text-lg font-bold text-gray-950 mb-3">Start a Topic</h2>
            <form onSubmit={submitTopic} className="space-y-3">
              <select
                value={form.category_id}
                onChange={(event) => setForm((current) => ({ ...current, category_id: event.target.value }))}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <input
                value={form.title}
                onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                placeholder="Topic title"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <textarea
                value={form.body}
                onChange={(event) => setForm((current) => ({ ...current, body: event.target.value }))}
                placeholder="Write the first post"
                required
                rows="6"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button type="submit" className="w-full bg-gray-950 text-white rounded px-4 py-2 text-sm font-semibold">
                Post Topic
              </button>
            </form>
          </section>

          <section className="bg-white border border-gray-200 rounded overflow-hidden">
            <div className="border-b border-gray-200 px-5 py-4">
              <h2 className="text-lg font-bold text-gray-950">Latest Topics</h2>
            </div>

            {loading ? (
              <div className="p-8 text-center text-gray-600">Loading community topics...</div>
            ) : topics.length === 0 ? (
              <div className="p-8 text-center text-gray-600">No topics yet.</div>
            ) : (
              <div className="divide-y divide-gray-100">
                {topics.map((topic) => (
                  <article key={topic.id} className="p-5 hover:bg-gray-50">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-950">{topic.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {topic.community_categories?.name || 'General'} {topic.servers?.name ? `for ${topic.servers.name}` : ''}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 md:text-right">
                        <div>{topic.reply_count || 0} replies</div>
                        <div>{formatDate(topic.last_activity_at)}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
