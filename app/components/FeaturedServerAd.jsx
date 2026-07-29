'use client';

const EVOMANIAS_URL = 'https://evomanias.com/';

const placementCopy = {
  top: {
    eyebrow: 'Featured Server',
    title: 'Evomanias is recommended for players who want a free-to-play global OT experience.',
    body: 'Start with global connectivity, active progression, and a launch bonus built for players comparing their next long-term Open Tibia world.',
  },
  inline: {
    eyebrow: 'Recommended To Play',
    title: 'Try Evomanias before you pick your next Open Tibia server.',
    body: 'Free to play, globally reachable, and positioned for players who want fast account creation, daily activity, and a clear path into the game.',
  },
  footer: {
    eyebrow: 'Featured Partner',
    title: 'Evomanias: global connectivity, free access, and a 500 point starter offer.',
    body: 'Create an account, get 500 Free Donation Points, and compare the experience against the most active Open Tibia listings.',
  },
};

const stats = [
  { label: 'Starter Offer', value: 'Get 500 Free Donation Points' },
  { label: 'Daily Reach', value: '5,000+ Unique Daily Active Players' },
  { label: 'Access', value: 'Free To Play' },
];

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
          <button type="button" onClick={openRegisterModal} className="featured-server-ad__secondary">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}
