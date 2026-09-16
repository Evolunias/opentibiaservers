import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteModeTabs from '@/app/components/SiteModeTabs';
import { getBoardBySlug, getTopicsForBoard } from '@/lib/forum-data';
import { buildAbsoluteUrl } from '@/lib/seo';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { board } = await getBoardBySlug(params.board);
  if (!board) return { title: 'Board not found' };
  return {
    title: `${board.name} — Open Tibia Forum`,
    description: board.description || `Discuss ${board.name} on OpenTibiaServers.`,
    alternates: { canonical: buildAbsoluteUrl(`/forum/${board.slug}`) },
  };
}

function formatWhen(value) {
  if (!value) return '—';
  try { return new Date(value).toLocaleString(); } catch { return '—'; }
}

export default async function ForumBoardPage({ params }) {
  const { board, children, error } = await getBoardBySlug(params.board);
  if (!board) notFound();
  const { topics } = await getTopicsForBoard(board.id);

  return (
    <main className="directory-shell min-h-screen">
      <div className="directory-shell__glow" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12">
        <SiteModeTabs />
        <div className="forum-board-page mt-6">
          <div className="forum-board-page__crumb">
            <Link href="/">Forum</Link>
            <span>/</span>
            <span>{board.name}</span>
          </div>
          <header className="forum-board-page__head">
            <div>
              <h1>{board.name}</h1>
              <p>{board.description}</p>
            </div>
            <Link href={`/forum/${board.slug}/new`} className="auth-btn auth-btn--register">New thread</Link>
          </header>
          {error ? <div className="forum-alert">{error}</div> : null}
          {children?.length ? (
            <div className="forum-subboards">
              {children.map((child) => (
                <Link key={child.id} href={`/forum/${child.slug}`} className="forum-subboards__item">
                  <strong>{child.name}</strong>
                  <span>{child.description}</span>
                </Link>
              ))}
            </div>
          ) : null}
          <div className="forum-topic-table">
            <div className="forum-topic-table__head">
              <span>Topic</span><span>Replies</span><span>Views</span><span>Last post</span>
            </div>
            {!topics.length ? (
              <div className="forum-empty">
                <p>No threads yet. Be the first to open this board with a clear, useful post.</p>
                <Link href={`/forum/${board.slug}/new`} className="auth-btn auth-btn--register">Start a thread</Link>
              </div>
            ) : topics.map((topic) => (
              <Link key={topic.id} href={`/forum/${board.slug}/${topic.slug}`} className="forum-topic-row">
                <div>
                  {topic.pinned ? <em className="forum-topic-row__pin">Pinned</em> : null}
                  <strong>{topic.title}</strong>
                </div>
                <span>{Number(topic.reply_count || 0).toLocaleString()}</span>
                <span>{Number(topic.view_count || 0).toLocaleString()}</span>
                <span>{formatWhen(topic.last_post_at)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}