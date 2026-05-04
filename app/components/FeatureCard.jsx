'use client';

import { useState } from 'react';
import './FeatureCard.css';

const categoryIcons = {
  'Progression': '📈',
  'PvE Content': '⚔️',
  'Combat Mechanics': '🗡️',
  'Daily Activities': '🌟',
  'Equipment': '🛡️',
  'Economy': '💰',
  'Navigation': '🗺️',
  'Gathering': '⛏️',
  'Currency': '🪙',
  'Hunting': '🎯',
  'Death Mechanics': '💀',
  'Class System': '👤',
  'Combat': '⚡',
};

export default function FeatureCard({ feature }) {
  const [expanded, setExpanded] = useState(false);

  if (!feature) return null;

  const icon = categoryIcons[feature.category] || '⭐';

  return (
    <article
      className={`feature-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="feature-header">
        <div className="feature-icon">{icon}</div>
        <div className="feature-title-section">
          <h3>{feature.name}</h3>
          <span className="feature-category">{feature.category}</span>
        </div>
      </div>

      <p className="feature-description">{feature.description}</p>

      {expanded && feature.details && (
        <div className="feature-details">
          <ul className="details-list">
            {feature.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>

          {feature.level_buffs && (
            <div className="feature-subsection">
              <h4>Talent Page Unlocks</h4>
              <ul className="details-list">
                {feature.level_buffs.map((buff, idx) => (
                  <li key={idx}>{buff}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="feature-toggle">
        <span className="toggle-text">{expanded ? 'Hide details' : 'Show details'}</span>
        <span className="toggle-icon">{expanded ? '−' : '+'}</span>
      </div>
    </article>
  );
}
