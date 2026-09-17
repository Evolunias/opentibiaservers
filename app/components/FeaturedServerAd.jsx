'use client';

const EVOMANIAS_URL = 'https://evomanias.com/';
const DOWNLOADS_URL = 'https://evomanias.com/downloads';
const DISCORD_URL = 'https://discord.gg/wj4D48Jj5W';

const placementCopy = {
  top: {
    eyebrow: 'Featured Server',
    title: 'Evomanias — Plus Plan $200/year (was $360, save $160).',
    body: 'Free to play and free to download. Get 500 free donation points, then join Discord for a free store backpack.',
  },
  inline: {
    eyebrow: 'Recommended To Play',
    title: 'Try Evomanias: free download, 500 free points, Plus Plan $200/yr.',
    body: 'Save $160 vs $360 on Plus Plan. Free store backpack when you join Discord. Global OT with a clear path into the game.',
  },
  footer: {
    eyebrow: 'Featured Partner',
    title: 'Evomanias: Plus Plan $200/yr (save $160), 500 free points, Discord backpack.',
    body: 'Free download and free-to-play core world. Create an account, claim 500 free donation points, and grab the free store backpack on Discord.',
  },
};

const stats = [
  { label: 'Plus Plan', value: '$200/year (was $360, save $160)' },
  { label: 'Starter Offer', value: '500 Free Donation Points' },
  { label: 'Discord Perk', value: 'Free Store Backpack' },
  { label: 'Access', value: 'Free To Play + Free Download' },
];

const highlights = ['Plus $200/yr', '500 Free Points', 'Discord Backpack', 'Free Download'];

function openRegisterModal() {
  window.dispatchEvent(new CustomEvent('ots:open-auth', { detail: { mode: 'register' } }));
}

export default function FeaturedServerAd({ placement = 'inline' }) {
  const copy = placementCopy[placement] || placementCopy.inline;
  const isCompact = placement === 'top';

  return (
    <section className={`featured-server-ad featured-server-ad--${placement}`} aria-label="Featured Evomanias server promotion">
      <div className="featured-server-ad__inner">
        <div className="featured-server-ad__copy">
          <p className="featured-server-ad__eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
          {!isCompact ? (
            <div className="featured-server-ad__highlights" aria-label="Evomanias promotional highlights">
              {highlights.map((item) => (
                <span key={item} className="featured-server-ad__chip">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {!isCompact ? (
          <div className="featured-server-ad__stats" aria-label="Evomanias highlights">
            {stats.map((stat) => (
              <div key={stat.label} className="featured-server-ad__stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        ) : null}

        <div className="featured-server-ad__actions">
          <a href={EVOMANIAS_URL} target="_blank" rel="noopener noreferrer" className="featured-server-ad__primary">
            Play Evomanias
          </a>
          <a href={DOWNLOADS_URL} target="_blank" rel="noopener noreferrer" className="featured-server-ad__secondary">
            Free Download
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="featured-server-ad__secondary">
            Discord + Backpack
          </a>
          <button type="button" onClick={openRegisterModal} className="featured-server-ad__secondary">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}
