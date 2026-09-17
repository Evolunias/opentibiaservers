'use client';

const EVOMANIAS_URL = 'https://evomanias.com/';
const DOWNLOADS_URL = 'https://evomanias.com/downloads';
const DISCORD_URL = 'https://discord.gg/wj4D48Jj5W';

export default function EvomaniasHomeStrip() {
  return (
    <aside className="evomanias-home-strip" aria-label="Evomanias featured partner offer">
      <div className="evomanias-home-strip__inner">
        <div className="evomanias-home-strip__copy">
          <p className="evomanias-home-strip__eyebrow">Featured partner</p>
          <p className="evomanias-home-strip__headline">
            <strong>Evomanias</strong> — free download, Plus Plan <strong>$200/yr</strong> (was $360, save $160),
            500 free points, Discord backpack.
          </p>
        </div>
        <div className="evomanias-home-strip__actions">
          <a href={DOWNLOADS_URL} target="_blank" rel="noopener noreferrer" className="evomanias-home-strip__primary">
            Free Download
          </a>
          <a href={EVOMANIAS_URL} target="_blank" rel="noopener noreferrer" className="evomanias-home-strip__secondary">
            View Offer
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="evomanias-home-strip__secondary">
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
