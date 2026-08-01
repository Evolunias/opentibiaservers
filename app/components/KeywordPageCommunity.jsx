'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import AuthModal from '@/app/components/AuthModal';
import { supabase } from '@/lib/supabase';

function date(value) {
  if (!value) return '';
  return new Date(value).toLocaleString();
}

export default function KeywordPageCommunity({ pageSlug, keyword }) {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [commentBody, setCommentBody] = useState('');
  const [screenshotUrl, setScreenshotUrl] = useState('');
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);

  const loadCommunity = useCallback(async () => {
    try {
      const [{ data: commentRows }, { data: screenshotRows }] = await Promise.all([
        supabase
          .from('keyword_page_comments')
          .select('*')
          .eq('page_slug', pageSlug)
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(25),
        supabase
          .from('keyword_page_screenshots')
          .select('*')
          .eq('page_slug', pageSlug)
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(12),
      ]);
      setComments(commentRows || []);
      setScreenshots(screenshotRows || []);
    } catch (err) {
      console.error('Failed to load keyword page community:', err);
    }
  }, [pageSlug]);

  useEffect(() => {
    loadCommunity();
  }, [loadCommunity]);

  const submitComment = async (event) => {
    event.preventDefault();
    setError(null);
    setNotice(null);
    if (!user) {
      setAuthOpen(true);
      return;
    }

    const { error: insertError } = await supabase.from('keyword_page_comments').insert([{
      page_slug: pageSlug,
      keyword,
      user_id: user.id,
      body: commentBody,
    }]);

    if (insertError) {
      setError(insertError.message || 'Unable to post comment.');
      return;
    }

    setCommentBody('');
    setNotice('Comment posted.');
    await loadCommunity();
  };

  const submitScreenshot = async (event) => {
    event.preventDefault();
    setError(null);
    setNotice(null);
    if (!user) {
      setAuthOpen(true);
      return;
    }

    const { error: insertError } = await supabase.from('keyword_page_screenshots').insert([{
      page_slug: pageSlug,
      keyword,
      user_id: user.id,
      image_url: screenshotUrl,
    }]);

    if (insertError) {
      setError(insertError.message || 'Unable to submit screenshot.');
      return;
    }

    setScreenshotUrl('');
    setNotice('Screenshot submitted.');
    await loadCommunity();
  };

  return (
    <>
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-950">Community Notes</h2>
          <p className="mt-2 text-sm text-gray-600">
            Add corrections, server context, launch notes, and player observations for this keyword page.
          </p>
          {!user ? (
            <div className="mt-4 rounded border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
              <button type="button" onClick={() => setAuthOpen(true)} className="font-bold text-blue-700">
                Sign in or register
              </button>{' '}
              to interact with this page.
            </div>
          ) : null}
          {notice ? <div className="mt-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">{notice}</div> : null}
          {error ? <div className="mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div> : null}
          <form onSubmit={submitComment} className="mt-4 space-y-3">
            <textarea
              value={commentBody}
              onChange={(event) => setCommentBody(event.target.value)}
              required
              rows="4"
              placeholder="Add useful context, not spam."
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded bg-gray-950 px-4 py-2 text-sm font-bold text-white">
              Post Note
            </button>
          </form>

          <div className="mt-5 space-y-3">
            {comments.map((comment) => (
              <article key={comment.id} className="rounded border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm leading-6 text-gray-800 whitespace-pre-wrap">{comment.body}</p>
                <p className="mt-2 text-xs text-gray-500">{date(comment.created_at)}</p>
              </article>
            ))}
            {comments.length === 0 ? <p className="text-sm text-gray-600">No community notes yet.</p> : null}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-950">Screenshots</h2>
          <p className="mt-2 text-sm text-gray-600">
            Submit image URLs for relevant server websites, client views, launch graphics, maps, or community evidence.
          </p>
          <form onSubmit={submitScreenshot} className="mt-4 flex gap-2">
            <input
              type="url"
              value={screenshotUrl}
              onChange={(event) => setScreenshotUrl(event.target.value)}
              required
              placeholder="https://..."
              className="min-w-0 flex-1 rounded border border-gray-300 px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded bg-gray-950 px-4 py-2 text-sm font-bold text-white">
              Submit
            </button>
          </form>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {screenshots.map((shot) => (
              <a key={shot.id} href={shot.image_url} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded border border-gray-200 bg-gray-50 hover:no-underline">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.image_url} alt={`${keyword} screenshot`} className="aspect-video w-full object-cover" />
                <div className="px-3 py-2 text-xs text-gray-600 break-all">{shot.image_url}</div>
              </a>
            ))}
            {screenshots.length === 0 ? <p className="text-sm text-gray-600">Verified screenshots will appear here after players or owners add media tied to this exact topic.</p> : null}
          </div>
        </div>
      </div>
    </section>
    <AuthModal open={authOpen} mode="register" onClose={() => setAuthOpen(false)} onSuccess={() => loadCommunity()} />
    </>
  );
}
