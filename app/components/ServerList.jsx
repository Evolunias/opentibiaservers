'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';
import { getServerExcerpt, getServerExcerptSources } from '@/lib/server-excerpts';
import ServerLogo from './ServerLogo';

function formatPercent(value) {
  if (value === null || value === undefined) return '-';
  return `${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}%`;
}

function formatNumber(value) {
  if (value === null || value === undefined) return '-';
  return Number(value).toLocaleString();
}

function formatStars(value) {
  const count = Math.max(3, Math.min(5, Math.round(Number(value || 0))));
  return `${'★'.repeat(count)}${'☆'.repeat(5 - count)}`;
}

export default function ServerList({ servers }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleServer = (id) => setExpandedId((current) => current === id ? null : id);

  return (
    <div className="server-directory-list">
      <div className="server-table-wrap overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
          <tr className="server-list__featured-row">
            <td colSpan={7} className="px-4 py-3">
              <div className="server-list__featured-content">
                <div className="server-list__featured-brand">
                  <span className="server-list__featured-mark" aria-hidden="true">01</span>
                  <div className="server-list__featured-details">
                    <span className="server-list__featured-label">Featured listing</span>
                    <Link href="/evomanias" className="server-list__featured-name">Evomanias.com</Link>
                    <span className="server-list__featured-copy">A featured Open Tibia server profile</span>
                  </div>
                </div>
                <a
                  href="https://evomanias.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="server-list__featured-action"
                >
                  <span>Visit official site</span>
                  <span className="server-list__featured-arrow" aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="server-directory-list__items">
        {servers.map((server) => {
          const rowId = server.id || server.canonical_slug || server.slug || server.name;
          const excerptId = `server-excerpt-${String(rowId).replace(/[^a-zA-Z0-9_-]/g, '-')}`;
          const excerpt = getServerExcerpt(server, { maxLength: 520 });
          const excerptSources = getServerExcerptSources(server);
          const expanded = expandedId === rowId;

          return (
          <article
            key={rowId}
            className={`directory-row ${expanded ? 'is-expanded' : ''} ${excerpt ? 'has-excerpt' : ''}`}
            onClick={excerpt ? () => toggleServer(rowId) : undefined}
          >
            <ServerLogo server={server} />
            <div className="directory-row__main">
              <div className="directory-row__titleline">
                {excerpt ? (
                  <button
                    type="button"
                    className="directory-row__name"
                    aria-expanded={expanded}
                    aria-controls={excerptId}
                  >
                    {server.name}
                  </button>
                ) : <span className="directory-row__name">{server.name}</span>}
                {excerpt ? <span className="directory-row__excerpt-hint">{expanded ? 'Hide details' : 'Read excerpt'}</span> : null}
              </div>
              <div className="directory-row__rating" aria-label={`${Number(server.average_rating || 0).toFixed(1)} out of 5 stars`}>
                <span>{formatStars(server.average_rating)}</span>
                <strong>{Number(server.average_rating || 0).toFixed(1)}</strong>
                <small>{server.review_count || 0} reviews</small>
              </div>
                  <div className="directory-row__votes text-xs text-slate-400" title="All-time votes">{Number(server.vote_count || 0)} votes</div>
              <p className="directory-row__address">{server.host || server.ip}:{server.port || 7171}</p>
              <div className="directory-row__tags">
                <span>{server.world_type || 'PVP'}</span>
                <span>Client {server.version || '-'}</span>
                <span>{server.exp_rate || 1}x EXP</span>
                <span>{server.location || 'Location pending'}</span>
              </div>
            </div>
            <dl className="directory-row__metrics">
              <div><dt>Highest players</dt><dd>{formatNumber(server.players_peak || server.players_online || 0)}</dd></div>
              <div><dt>Uptime</dt><dd>{formatPercent(server.uptime_percent)}</dd></div>
            </dl>
            <Link href={getServerPath(server)} onClick={(event) => event.stopPropagation()} className="directory-row__action">View profile <span aria-hidden="true">→</span></Link>
            {excerpt ? <div id={excerptId} className="directory-row__excerpt" aria-hidden={!expanded}>
              <div>
                <span className="directory-row__excerpt-label">Source-backed excerpt</span>
                <p>{excerpt}</p>
                {excerptSources.length ? (
                  <div className="directory-row__excerpt-sources">
                    {excerptSources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={expanded ? 0 : -1}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div> : null}
          </article>
          );
        })}
      </div>
    </div>
  );
}
