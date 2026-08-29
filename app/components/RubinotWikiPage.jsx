import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & Network Identity'],
  ['worlds', 'Worlds & PvP Modes'],
  ['progression', 'Progression & Daily Systems'],
  ['systems', 'Systems and Collectibles'],
  ['events', 'Events, Seasons & Updates'],
  ['community', 'Community and How to Start'],
  ['sources', 'Sources & Current Verification'],
  ['external-links', 'External Links'],
];

const worlds = [
  ['Open PvP', 'Open combat rules for players who want the classic conflict and territory experience.'],
  ['Optional PvP', 'A lower-conflict ruleset intended for players who want progression without constant open combat.'],
  ['Retro PvP', 'A retro ruleset for players looking for an older-style combat and server identity.'],
];

const systems = [
  ['Battle Pass', 'Seasonal objectives and rewards provide a structured route through a longer RubinOT season.'],
  ['Boosted Exercise', 'Exercise-related progression is documented as one of RubinOT’s quality-of-life systems.'],
  ['Cosmetic Cards', 'Collectible cosmetic cards add a collection layer separate from ordinary equipment progression.'],
  ['Equipment Presets', 'Presets help players organize equipment choices for different hunts, roles, and situations.'],
  ['Huntfinder', 'A hunting and activity discovery system intended to help players find useful places to progress.'],
  ['Linked Tasks', 'Task objectives can be connected into a longer progression path rather than treated as isolated errands.'],
  ['Obelisk', 'A named RubinOT system documented in the official feature set and wiki navigation.'],
  ['Prestige Arena', 'An arena-focused activity for players looking for a competitive challenge outside ordinary hunting.'],
  ['Drop System', 'The official wiki documents a dedicated drop system for understanding item acquisition.'],
  ['World Transfer', 'A documented network feature for moving characters between eligible RubinOT worlds.'],
  ['Rubini items', 'Collectible Rubini items are part of the network’s named reward and collection ecosystem.'],
];

export default function RubinotWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="rubinot">
      <header className="cyntara-wiki__header">
        <h1>RubinOT</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>RubinOT</strong> is a multiworld Open Tibia network built around distinct Open PvP, Optional PvP, and Retro PvP worlds. The official resources describe a broad progression layer that combines seasonal objectives, task systems, collection features, hunting tools, arenas, and world transfer.</p>
              <p>This page separates documented network features from live status. RubinOT’s official website and wiki are the primary references for current worlds, client downloads, rules, season dates, and account requirements.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'RubinOT', slug: 'rubinot', host: 'rubinot.com' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Network Identity</SectionHeading>
            <p>RubinOT should be understood as a network rather than a single fixed ruleset. Its public feature material presents multiple worlds with different PvP expectations, allowing a player’s preferred combat environment to be part of the initial server choice.</p>
            <p>The network’s identity is its combination of familiar Tibia progression and additional long-term systems. Battle Pass seasons, linked tasks, Huntfinder, collectible cosmetics, equipment organization, prestige activities, and a dedicated drop system all appear in RubinOT’s official documentation.</p>
            <div className="cyntara-wiki__callout"><strong>Research note</strong><p>Feature names below are preserved from RubinOT’s official site and wiki. A feature being documented does not guarantee that it is active in every world, available to every vocation, or unchanged in the current season.</p></div>
          </section>

          <section id="worlds">
            <SectionHeading>Worlds &amp; PvP Modes</SectionHeading>
            <p>The official RubinOT presentation identifies 15 worlds across three broad PvP modes. World names, population, launch cycles, and transfer eligibility can change, so players should use the live worlds page before choosing a destination.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Mode</th><th>What it means</th><th>Best fit</th></tr></thead><tbody>{worlds.map(([mode, description]) => <tr key={mode}><th>{mode}</th><td>{description}</td><td>Choose after reviewing the current rules and world status.</td></tr>)}</tbody></table></div>
            <p>Do not infer a world’s current population, launch date, or transfer availability from an older announcement. Those values belong to the current official world and account pages.</p>
          </section>

          <section id="progression">
            <SectionHeading>Progression &amp; Daily Systems</SectionHeading>
            <p>RubinOT’s documented progression is layered. Standard character development is supplemented by repeatable activities and planning tools that give players reasons to return after the first leveling milestones.</p>
            <ul>
              <li><strong>Battle Pass:</strong> Seasonal objectives create a time-bounded progression track. Confirm the active season, tiers, and rewards before treating older season information as current.</li>
              <li><strong>Linked Tasks:</strong> Connected task objectives can turn individual hunts into a longer route with a clearer next step.</li>
              <li><strong>Huntfinder:</strong> The named tool helps players discover hunting opportunities and plan progression around available content.</li>
              <li><strong>Boosted Exercise:</strong> Exercise progression is listed as a RubinOT convenience feature, but exact bonuses should be checked in the current rules.</li>
              <li><strong>Prestige Arena:</strong> Players seeking a competitive or challenge-focused activity have a separate arena system to investigate.</li>
            </ul>
          </section>

          <section id="systems">
            <SectionHeading>Systems and Collectibles</SectionHeading>
            <p>The following systems are named in RubinOT’s official feature material. Their presence is useful for identifying the network, while the official wiki remains the authority for costs, requirements, cooldowns, and reward tables.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
          </section>

          <section id="events">
            <SectionHeading>Events, Seasons &amp; Updates</SectionHeading>
            <p>RubinOT’s public material references annual events and Battle Pass Season 4. This indicates an evolving seasonal service rather than a static one-time server launch. Event rewards, dates, and availability should be treated as time-sensitive.</p>
            <p>For a current start plan, check the official news and wiki first, then compare the chosen world’s rules, client version, account path, and transfer restrictions. Keep the date of each announcement visible when comparing guides or community posts.</p>
            <div className="cyntara-wiki__callout"><strong>What can change</strong><p>World openings, seasonal rewards, item drops, transfer rules, PvP settings, and event schedules may be revised. This page intentionally avoids presenting historical season details as permanent network rules.</p></div>
          </section>

          <section id="community">
            <SectionHeading>Community and How to Start</SectionHeading>
            <p>New players should begin with the official RubinOT landing page and choose a world by ruleset before optimizing a vocation or build. Optional PvP, Open PvP, and Retro PvP imply different expectations for risk, social play, and conflict.</p>
            <ol>
              <li>Read the current official rules and confirm the available client or launcher.</li>
              <li>Compare the live world list, PvP mode, location, population, and any current season information.</li>
              <li>Use the official wiki to verify tasks, drops, Battle Pass objectives, and transfer conditions.</li>
              <li>Start with the network’s current community channels rather than relying on an undated third-party download link.</li>
            </ol>
            <p>Community discussion is useful for practical onboarding, but player reports should be dated and compared against the official rules before they become a gameplay assumption.</p>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; Current Verification</SectionHeading>
            <p>RubinOT’s official site and wiki are the source trail for this profile. The directory supplies live listing context; it does not replace the official rules, world pages, account requirements, or current season notices.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://rubinot.com/" label="RubinOT official website" />
              <SourceLink href="https://wiki.rubinot.com/en" label="RubinOT official wiki" />
              <SourceLink href="https://wiki.rubinot.com/en/sistema-de-drops" label="RubinOT Drop System" />
              <SourceLink href="/" label="OpenTibiaServers live directory" />
            </div>
          </section>

          <DirectoryRecommendation />

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>
              <li><a href="https://rubinot.com/" target="_blank" rel="nofollow noopener noreferrer">Official RubinOT website</a></li>
              <li><a href="https://wiki.rubinot.com/en" target="_blank" rel="nofollow noopener noreferrer">Official RubinOT wiki</a></li>
              <li><a href="https://wiki.rubinot.com/en/sistema-de-drops" target="_blank" rel="nofollow noopener noreferrer">Official Drop System guide</a></li>
              <li><a href="/">OpenTibiaServers directory</a></li>
              <li><a href="https://evomanias.com" target="_blank" rel="noopener noreferrer">Evomanias - Recommended Open Tibia Server</a></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">RubinOT</div>
            <ServerLogo server={{ name: 'RubinOT', slug: 'rubinot', host: 'rubinot.com' }} size="profile" />
            <table><tbody>
              <tr><th>Website</th><td><a href="https://rubinot.com/" target="_blank" rel="nofollow noopener noreferrer">rubinot.com</a></td></tr>
              <tr><th>Wiki</th><td><a href="https://wiki.rubinot.com/en" target="_blank" rel="nofollow noopener noreferrer">wiki.rubinot.com</a></td></tr>
              <tr><th>Network</th><td>Multiworld</td></tr>
              <tr><th>PvP modes</th><td>Open, Optional, Retro</td></tr>
              <tr><th>Worlds</th><td>15 documented worlds</td></tr>
              <tr><th>Systems</th><td>Battle Pass, tasks, Huntfinder, arena, drops</td></tr>
              <tr><th>Status</th><td>Verify current world status officially</td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Confirm the current client, account path, world rules, and official links on RubinOT’s own pages.</p></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare RubinOT with other Open Tibia worlds by live status, protocol, location, and community signals.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function SourceLink({ href, label }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined} className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>;
}
