import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & Server Identity'],
  ['worlds', 'Worlds & PvP Content'],
  ['progression', 'Rates & Progression'],
  ['systems', 'Custom Systems'],
  ['community', 'Community and How to Start'],
  ['sources', 'Sources & Current Verification'],
  ['external-links', 'External Links'],
];

const systems = [
  ['City War', 'Large-scale PvP is spread across more than ten maps, with multiple routes and battle areas for guild and team conflict.'],
  ['Warzones', 'Warzones I, II, and III are listed as dedicated combat areas within the server’s custom PvP content.'],
  ['Offline Training', 'The offline trainer lets characters continue skill development while the player is away from the game.'],
  ['Cast System', 'The cast system is advertised as an additional way to share gameplay and earn an experience bonus while casting.'],
  ['Combat Modifiers', 'Dodge, critical, reflect, and fatal systems add extra layers to combat beyond the standard 8.6 baseline.'],
  ['Upgrade Weapon', 'The weapon upgrade system gives equipment progression a separate improvement path beyond ordinary loot.'],
  ['Autoloot', 'Autoloot reduces routine pickup work during hunts and keeps fast-paced progression moving.'],
  ['Custom Client', 'The own client is described as supporting mounts, new items, and outfits from newer content alongside the 8.6 server profile.'],
];

const rates = [
  ['Experience', '400x'],
  ['Skill', '17x'],
  ['Magic', '6x'],
  ['Loot', '3x'],
  ['Client context', '8.6'],
  ['PvP', 'Open PvP'],
];

export default function BaiakIlusionWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="baiak-ilusion">
      <header className="cyntara-wiki__header">
        <h1>Baiak Ilusion</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Baiak Ilusion</strong> is a Brazil-hosted Open Tibia server built around the 8.6 client, a high experience rate, and open PvP activity. Its public listing highlights City War across more than ten maps, custom combat modifiers, and quality-of-life systems for players who want a fast progression loop.</p>
              <p>The directory record points to <code>sv.baiak-ilusion.com.br:7171</code>. The profile below separates public listing data and advertised systems from details that still need confirmation on the live website or through an owner-managed community channel.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'Baiak Ilusion', slug: 'baiak-ilusion', host: 'baiak-ilusion.com.br' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Server Identity</SectionHeading>
            <p>Baiak Ilusion presents a high-rate, PvP-focused Baiak experience rather than a traditional low-rate real-map progression. The public listing identifies Brazil as the location signal and advertises a dedicated server with a modified map built for PvP play.</p>
            <p>The currently listed endpoint is <code>sv.baiak-ilusion.com.br</code> on port <code>7171</code>. A server-list snapshot recorded 778 players out of a 2,000 capacity and 99.1% uptime; those numbers are time-sensitive and should be checked again before making a play decision.</p>
            <div className="cyntara-wiki__callout"><strong>Identity note</strong><p>Search results also contain older or similarly named Baiak Ilusion material. This page uses the Brazil-hosted <code>.com.br</code> record and keeps its public listing facts separate from unverified historical claims.</p></div>
          </section>

          <section id="worlds">
            <SectionHeading>Worlds &amp; PvP Content</SectionHeading>
            <p>The defining content signal is City War: a PvP activity described across more than ten maps with multiple options for organized conflict. The same public feature list names a modified Baiak map and three Warzone areas.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Content</th><th>Publicly described role</th><th>What to verify in-game</th></tr></thead><tbody>
              <tr><th>City War</th><td>Large-scale PvP across 10+ maps.</td><td>Map access, schedules, rewards, and team rules.</td></tr>
              <tr><th>Warzones I–III</th><td>Dedicated custom combat areas.</td><td>Entry requirements, rotations, and reward tables.</td></tr>
              <tr><th>Modified Baiak map</th><td>A map adjusted specifically for PvP play.</td><td>Town layout, hunting routes, protection zones, and travel costs.</td></tr>
            </tbody></table></div>
          </section>

          <section id="progression">
            <SectionHeading>Rates &amp; Progression</SectionHeading>
            <p>Baiak Ilusion’s advertised rate profile favors quick character development: experience is listed at x400, with separate skill, magic, and loot rates that shape how much time is spent hunting, training, and upgrading equipment.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Setting</th><th>Advertised value</th><th>Player impact</th></tr></thead><tbody>{rates.map(([setting, value, impact]) => <tr key={setting}><th>{setting}</th><td><strong>{value}</strong></td><td>{impact || rateImpact(setting)}</td></tr>)}</tbody></table></div>
            <p>Offline training, party shared experience, autoloot, and weapon upgrades are intended to reduce friction between early leveling and custom PvP content. The exact formulas, reset policy, donation rules, and progression caps should be confirmed from the current rules or client.</p>
          </section>

          <section id="systems">
            <SectionHeading>Custom Systems</SectionHeading>
            <p>The following systems are named in public server descriptions. Their inclusion identifies the server’s intended gameplay direction, but exact costs, chances, cooldowns, and restrictions may change.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
            <div className="cyntara-wiki__callout"><strong>What is not yet documented</strong><p>Public sources do not provide a dependable vocation table, item database, monster guide, quest walkthrough, boss schedule, or complete ruleset. Treat those as open research fields rather than filling them with assumptions from another Baiak server.</p></div>
          </section>

          <section id="community">
            <SectionHeading>Community and How to Start</SectionHeading>
            <p>Start from the official domain and confirm that the account and client links still belong to the operator. When checked for this profile, the official domain returned a Cloudflare verification page, so the site should be opened in a normal browser with JavaScript and cookies enabled.</p>
            <ol>
              <li>Open the official website and use its current account or client path rather than a third-party mirror.</li>
              <li>Confirm the active client, host, port, PvP rules, and any current reset or season announcement.</li>
              <li>Read the rules for botting, war participation, upgrades, donations, and support tickets before creating a character.</li>
              <li>Compare the live player count with the directory snapshot, then look for dated community activity and current event information.</li>
            </ol>
            <p>Players who prefer organized conflict should investigate City War and the Warzones first. Players focused on progression should confirm how offline training, party experience, autoloot, and weapon upgrades interact with the x400 experience pace.</p>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; Current Verification</SectionHeading>
            <p>This profile combines the directory snapshot with a public server-list description. The official site is the authority for current downloads, account creation, rules, support, and live announcements, while the directory supplies a time-stamped discovery signal.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://baiak-ilusion.com.br/" label="Baiak Ilusion official website" />
              <SourceLink href="https://baiak-ilusion.com.br/?subtopic=createaccount" label="Official account creation path" />
              <SourceLink href="https://tibiaotlist.com/servers/sv-baiak-ilusion-com-br" label="Public feature and rates listing" />
              <SourceLink href="https://otservlist.org/list-server_players_online-desc.html" label="Open Tibia player ranking" />
              <SourceLink href="/" label="OpenTibiaServers live directory" />
            </div>
          </section>

          <DirectoryRecommendation />

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>
              <li><a href="https://baiak-ilusion.com.br/" target="_blank" rel="nofollow noopener noreferrer">Official Baiak Ilusion website</a></li>
              <li><a href="https://baiak-ilusion.com.br/?subtopic=createaccount" target="_blank" rel="nofollow noopener noreferrer">Official account creation</a></li>
              <li><a href="https://tibiaotlist.com/servers/sv-baiak-ilusion-com-br" target="_blank" rel="nofollow noopener noreferrer">Public server feature listing</a></li>
              <li><a href="/">OpenTibiaServers directory</a></li>
              <li><a href="https://evomanias.com" target="_blank" rel="noopener noreferrer">Evomanias - Recommended Open Tibia Server</a></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Baiak Ilusion</div>
            <ServerLogo server={{ name: 'Baiak Ilusion', slug: 'baiak-ilusion', host: 'baiak-ilusion.com.br' }} size="profile" />
            <table><tbody>
              <tr><th>Website</th><td><a href="https://baiak-ilusion.com.br/" target="_blank" rel="nofollow noopener noreferrer">baiak-ilusion.com.br</a></td></tr>
              <tr><th>Host</th><td><code>sv.baiak-ilusion.com.br:7171</code></td></tr>
              <tr><th>Location</th><td>Brazil</td></tr>
              <tr><th>Client</th><td>8.6</td></tr>
              <tr><th>PvP</th><td>Open PvP</td></tr>
              <tr><th>Rates</th><td>x400 EXP / 17x skill / 6x magic / 3x loot</td></tr>
              <tr><th>Signature content</th><td>City War, Warzones, custom combat systems</td></tr>
              <tr><th>Status</th><td>Listed active; verify live status</td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Use the official domain and verify the current client, account path, rules, and support channel. Do not treat an old mirror or undated forum post as an official release.</p></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Baiak Ilusion with other Open Tibia worlds by live status, protocol, location, rates, and community signals.</p><a className="cyntara-wiki__button" href="/?search=Baiak%20Ilusion">Browse similar servers</a></div>
        </aside>
      </div>
    </main>
  );
}

function rateImpact(setting) {
  const impacts = {
    'Client context': 'Classic client context with custom additions.',
    PvP: 'Open combat rules; confirm protection zones and war rules.',
  };
  return impacts[setting] || 'Confirm the current formula and any level or system modifiers.';
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function SourceLink({ href, label }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined} className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>;
}
