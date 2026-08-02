'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function KnowledgeExplorer({ articles, collections }) {
  const [query, setQuery] = useState('');
  const [activeCollection, setActiveCollection] = useState('all');

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCollection = activeCollection === 'all' || article.collection === activeCollection;
      if (!matchesCollection) return false;
      if (!normalizedQuery) return true;

      const searchable = [
        article.name,
        article.summary,
        article.profile,
        ...(article.tags || []),
      ].join(' ').toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [activeCollection, articles, query]);

  return (
    <section className="knowledge-explorer" aria-labelledby="knowledge-explorer-title">
      <div className="knowledge-section-heading">
        <div>
          <p className="knowledge-kicker">Published field manual</p>
          <h2 id="knowledge-explorer-title">Browse the knowledge base</h2>
        </div>
        <p>{filteredArticles.length} source-profiled {filteredArticles.length === 1 ? 'article' : 'articles'}</p>
      </div>

      <div className="knowledge-explorer__controls">
        <label className="knowledge-search">
          <span className="sr-only">Search knowledge articles</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search formulas, monsters, equipment..."
            autoComplete="off"
          />
        </label>

        <div className="knowledge-segments" role="group" aria-label="Filter knowledge category">
          <button
            type="button"
            aria-pressed={activeCollection === 'all'}
            onClick={() => setActiveCollection('all')}
          >
            All
          </button>
          {collections.map((collection) => (
            <button
              key={collection.slug}
              type="button"
              aria-pressed={activeCollection === collection.slug}
              onClick={() => setActiveCollection(collection.slug)}
            >
              {collection.shortLabel}
            </button>
          ))}
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="knowledge-article-grid animated-grid">
          {filteredArticles.map((article) => (
            <article key={article.canonicalPath} className="knowledge-article-card">
              <div className="knowledge-article-card__topline">
                <span>{article.collectionLabel}</span>
                <span>{article.readingMinutes} min</span>
              </div>
              <h3>
                <Link href={article.canonicalPath}>{article.name}</Link>
              </h3>
              <p>{article.summary}</p>
              <div className="knowledge-article-card__footer">
                <span className="knowledge-status-dot" aria-hidden="true" />
                <span>{article.profile}</span>
                <Link href={article.canonicalPath} aria-label={`Read ${article.name}`}>
                  Read guide
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="knowledge-empty" role="status">
          <h3>No matching article</h3>
          <p>Try a broader mechanic, creature, item, or category.</p>
        </div>
      )}
    </section>
  );
}
