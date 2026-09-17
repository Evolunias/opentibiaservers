'use client';

import {
  EVOMANIAS_SITE_URL,
  EVOMANIAS_DOWNLOADS_URL,
  EVOMANIAS_DISCORD_URL,
  EVOMANIAS_OFFER,
} from '@/lib/partner-offer';

export default function EvomaniasHomeStrip() {
  return (
    <aside className="evomanias-home-strip" aria-label="Evomanias featured partner offer">
      <div className="evomanias-home-strip__inner">
        <div className="evomanias-home-strip__copy">
          <p className="evomanias-home-strip__eyebrow">Featured partner</p>
          <p className="evomanias-home-strip__headline">
            <strong>{EVOMANIAS_OFFER.name}</strong> - free download, Plus Plan{' '}
            <strong>{EVOMANIAS_OFFER.plusPlan}</strong> (was {EVOMANIAS_OFFER.plusWas}, save {EVOMANIAS_OFFER.plusSave}),
            {EVOMANIAS_OFFER.points}, {EVOMANIAS_OFFER.discordPerk}.
          </p>
        </div>
        <div className="evomanias-home-strip__actions">
          <a href={EVOMANIAS_DOWNLOADS_URL} target="_blank" rel="noopener noreferrer" className="evomanias-home-strip__primary">
            Free Download
          </a>
          <a href={EVOMANIAS_SITE_URL} target="_blank" rel="noopener noreferrer" className="evomanias-home-strip__secondary">
            View Offer
          </a>
          <a href={EVOMANIAS_DISCORD_URL} target="_blank" rel="noopener noreferrer" className="evomanias-home-strip__secondary">
            Discord Backpack
          </a>
          <a href="/evomanias" className="evomanias-home-strip__link">
            Directory profile
          </a>
        </div>
      </div>
    </aside>
  );
}
