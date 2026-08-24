'use client';

import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';
import ServerLogo from './ServerLogo';

const statusClass = (server) => (server.is_online ? 'text-emerald-300' : 'text-red-300');

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
  return (
    <div className="server-directory-list">
      <div className="server-table-wrap overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
          <tr className="server-list__featured-row">
            <td colSpan={8} className="px-4 py-3">
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
        {servers.map((server) => (
          <article key={server.id} className="directory-row">
            <ServerLogo server={server} />
            <div className="directory-row__main">
              <div className="directory-row__titleline">
                <Link href={getServerPath(server)} className="directory-row__name">{server.name}</Link>
                <span className={`directory-row__status ${server.is_online ? 'is-online' : 'is-offline'}`}>
                  {server.is_online ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className="directory-row__rating" aria-label={`${Number(server.average_rating || 0).toFixed(1)} out of 5 stars`}>
                <span>{formatStars(server.average_rating)}</span>
                <strong>{Number(server.average_rating || 0).toFixed(1)}</strong>
                <small>{server.review_count || 0} reviews</small>
              </div>
              <p className="directory-row__address">{server.host || server.ip}:{server.port || 7171}</p>
              <div className="directory-row__tags">
                <span>{server.world_type || 'PVP'}</span>
                <span>Client {server.version || '-'}</span>
                <span>{server.exp_rate || 1}x EXP</span>
                <span>{server.location || 'Location pending'}</span>
              </div>
            </div>
            <dl className="directory-row__metrics">
              <div><dt>Players</dt><dd className={statusClass(server)}>{formatNumber(server.players_online || 0)}</dd><small>of {formatNumber(server.max_players)}</small></div>
              <div><dt>Peak</dt><dd>{formatNumber(server.players_peak || 0)}</dd></div>
              <div><dt>Uptime</dt><dd>{formatPercent(server.uptime_percent)}</dd></div>
            </dl>
            <Link href={getServerPath(server)} className="directory-row__action">View profile <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
    </div>
  );
}
