'use client';

import { useState } from 'react';
import './NewsCard.css';

export default function NewsCard({ news }) {
  const [expanded, setExpanded] = useState(false);

  if (!news) return null;

  const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="news-card">
      <div className="news-header">
        <div className="news-title-section">
          <h3>{news.title}</h3>
          <div className="news-meta">
            <span className="news-date">{formattedDate}</span>
            {news.author && <span className="news-author">by {news.author}</span>}
            <span className={`news-category news-category-${news.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {news.category}
            </span>
          </div>
        </div>
      </div>

      <p className="news-summary">{news.summary}</p>

      {news.content && (
        <p className="news-content">{news.content}</p>
      )}

      {(news.key_changes || news.patch_details || news.highlights || news.fixes || news.features) && (
        <div className="news-details">
          <div className="news-list">
            {news.key_changes && (
              <ul className="details-list">
                {news.key_changes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {news.patch_details && (
              <ul className="details-list">
                {news.patch_details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {news.highlights && (
              <ul className="details-list">
                {news.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {news.fixes && (
              <ul className="details-list">
                {news.fixes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {news.features && (
              <ul className="details-list">
                {news.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
