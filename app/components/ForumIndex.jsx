import Link from 'next/link';

function formatCount(value) {
  return Number(value || 0).toLocaleString();
}

function BoardRow({ board, depth = 0 }) {
  return (
    <div className={`forum-board-row${depth ? ' forum-board-row--child' : ''}`}>
      <div className="forum-board-row__main">
        <Link href={`/forum/${board.slug}`} className="forum-board-row__title">
          {board.name}
        </Link>
        <p className="forum-board-row__desc">{board.description}</p>
        {board.children?.length ? (
          <div className="forum-board-row__subs">
            {board.children.map((child) => (
              <Link key={child.id} href={`/forum/${child.slug}`} className="forum-board-row__subchip">
                {child.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      <div className="forum-board-row__stats" aria-label="Board activity">
        <div>
          <strong>{formatCount(board.topic_count)}</strong>
          <span>topics</span>
        </div>
        <div>
          <strong>{formatCount(board.post_count)}</strong>
          <span>posts</span>
        </div>
      </div>
    </div>
  );
}

export default function ForumIndex({ sections = [], error = null }) {
  return (
    <section className="forum-shell">
      <header className="forum-hero">
        <p className="forum-hero__eyebrow">OpenTibiaServers Community</p>
        <h1 className="forum-hero__title">Forum</h1>
        <p className="forum-hero__dek">
          A modern home for Open Tibia builders and players — support, releases, scripting, mapping, launches, and collaboration.
          Cleaner structure than legacy boards, with sharper descriptions and a directory one tab away.
        </p>
      </header>

      {error ? (
        <div className="forum-alert">
          <strong>Forum data unavailable.</strong>
          <p>{error}</p>
        </div>
      ) : null}

      {!error && !sections.length ? (
        <div className="forum-alert">
          <strong>Forum boards are ready to seed.</strong>
          <p>Run <code>supabase/migrations/012_forum_otland_inspired.sql</code> in Supabase, then refresh.</p>
        </div>
      ) : null}

      <div className="forum-sections">
        {sections.map((section) => (
          <section key={section.id} className="forum-section">
            <div className="forum-section__head">
              <h2>{section.name}</h2>
              <p>{section.description}</p>
            </div>
            <div className="forum-section__boards">
              {(section.boards || []).map((board) => (
                <BoardRow key={board.id} board={board} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
