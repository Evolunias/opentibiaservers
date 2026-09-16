'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import SiteModeTabs from '@/app/components/SiteModeTabs';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { slugifyTopic } from '@/lib/forum-utils';

export default function NewForumTopicPage() {
  const params = useParams();
  const router = useRouter();
  const { user, loading } = useAuth();
  const boardSlug = String(params.board || '');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const previewSlug = useMemo(() => slugifyTopic(title), [title]);

  const openAuth = () => {
    window.dispatchEvent(new CustomEvent('ots:open-auth', { detail: { mode: 'login' } }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!user) return openAuth();
    setBusy(true);
    setError('');
    try {
      const { data: board, error: boardError } = await supabase
        .from('forum_boards')
        .select('id, slug, is_locked')
        .eq('slug', boardSlug)
        .maybeSingle();
      if (boardError) throw boardError;
      if (!board) throw new Error('Board not found.');
      if (board.is_locked) throw new Error('This board is locked.');

      const topicSlug = `${previewSlug}-${Date.now().toString(36)}`;
      const { data: topic, error: topicError } = await supabase
        .from('forum_topics')
        .insert({
          board_id: board.id,
          user_id: user.id,
          title: title.trim(),
          slug: topicSlug,
          body: body.trim(),
          status: 'open',
          last_post_at: new Date().toISOString(),
          last_post_user_id: user.id,
        })
        .select('id, slug')
        .single();
      if (topicError) throw topicError;

      const { error: postError } = await supabase.from('forum_posts').insert({
        topic_id: topic.id,
        user_id: user.id,
        body: body.trim(),
        status: 'published',
      });
      if (postError) throw postError;

      router.push(`/forum/${boardSlug}/${topic.slug}`);
    } catch (err) {
      setError(err.message || 'Could not create thread.');
      setBusy(false);
    }
  };

  return (
    <main className="directory-shell min-h-screen">
      <div className="directory-shell__glow" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-6 pb-12">
        <SiteModeTabs />
        <div className="forum-new-topic mt-6">
          <div className="forum-board-page__crumb">
            <Link href="/">Forum</Link>
            <span>/</span>
            <Link href={`/forum/${boardSlug}`}>{boardSlug}</Link>
            <span>/</span>
            <span>New thread</span>
          </div>
          <h1>Start a thread</h1>
          <p className="forum-new-topic__dek">Write a specific title and enough detail for someone to help or evaluate your release.</p>

          {!loading && !user ? (
            <div className="forum-alert">
              <strong>Sign in required.</strong>
              <p>Create an account or sign in to post.</p>
              <button type="button" className="auth-btn auth-btn--register" onClick={openAuth}>Sign in</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="forum-new-topic__form">
              <label>
                <span>Title</span>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required maxLength={140} placeholder="Clear, specific topic title" />
              </label>
              <label>
                <span>Post</span>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required rows={10} placeholder="Context, versions, logs, goals, and what you need from the community." />
              </label>
              {error ? <div className="forum-alert">{error}</div> : null}
              <button type="submit" className="auth-btn auth-btn--register" disabled={busy || !title.trim() || !body.trim()}>
                {busy ? 'Publishing…' : 'Publish thread'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}