const contents = [
  ['overview', 'Overview & Server Identity'],
  ['progression', 'Progression & Rates'],
  ['systems', 'Systems, Content & Events'],
  ['pvp', 'Hardcore PvP & Community Play'],
  ['sources', 'Sources & Current Verification'],
  ['external-links', 'External Links'],
];

export default function EzodusWikiPage() {
  return (
    <div className="cyntara-wiki">
      <header className="cyntara-wiki__header">
        <h1>Ezodus</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <main className="cyntara-wiki__content">
          <p><strong>Ezodus</strong> (officially associated with <code>ezodus.net</code>) is a real-map Open Tibia server documented through an OtLand Server Gala launch thread. The surviving source describes a high-rate, hardcore-PvP experience built around 10.00 and 12.30+ client support, expanded real-Tibia content, organized events, and a large set of custom progression conveniences.</p>
          <p>This page separates dated community-source claims from current directory status. The official website currently presents a Cloudflare verification screen, so players should confirm the current client, rules, population, and launch state directly before installing or transferring anything.</p>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview"><SectionHeading>Overview &amp; Server Identity</SectionHeading>
            <p>The OtLand source identifies Ezodus with the host <code>ezodus.net</code>, port <code>7171</code>, and a France/European real-map positioning. Its original thread was published by <strong>ellvo</strong> in February 2020 and preserved a long-form launch discussion rather than a title-only listing.</p>
            <p>The thread title advertised a 10.00–15.22 range, a 20 February 2026 18:00 start context, Castle War, Unhallowed Crypt, Weapon Proficiency, and Bloodfire G. The post body and later discussion instead contain the older 2020 launch context, so those dates should be treated as source history until a current official announcement is available.</p>
          </section>

          <section id="progression"><SectionHeading>Progression &amp; Rates</SectionHeading>
            <p>Ezodus was presented as a fast-starting server that gradually reduces experience rates as characters move toward the late game. The source thread records the following advertised stages:</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Level range</th><th>Experience</th><th>Other advertised rates</th></tr></thead><tbody>
              <tr><td>1–19</td><td>120x</td><td rowSpan="5">Skill 25x · Magic 4x · Loot 2x</td></tr>
              <tr><td>20–50</td><td>80x</td></tr><tr><td>51–80</td><td>35x</td></tr><tr><td>81–100</td><td>30x</td></tr><tr><td>101–120</td><td>25x</td></tr>
              <tr><td>121–150</td><td>12x</td><td rowSpan="6">12.30+ client was advertised with a 20% experience boost</td></tr>
              <tr><td>151–180</td><td>8x</td></tr><tr><td>181–200</td><td>5x</td></tr><tr><td>201–250</td><td>3x</td></tr><tr><td>251–350</td><td>2x</td></tr><tr><td>351+</td><td>1.5x</td></tr>
            </tbody></table></div>
          </section>

          <section id="systems"><SectionHeading>Systems, Content &amp; Events</SectionHeading>
            <p>The source describes a broad real-Tibia content base with shortened or streamlined progression. It names Warzone 4–6, Dream Labyrinth, Secret Library, Grimvale, Kilmaresh, Grave Danger, Netherworld, Brain Grounds, Zarganash, Barren Drift, Otherworld, Cobra and Falcon Bastions, Feyrist, Oramond, and the Summer and Winter Update areas.</p>
            <ul>
              <li><strong>Daily progression:</strong> Daily Rewards, resting bonuses, faster stamina regeneration, offline training, and a Prey system with damage, reduction, experience, and loot modifiers.</li>
              <li><strong>Equipment and utility:</strong> Imbuing, addon bonuses based on vocation, a market, cast system, wrap furniture, new summons, and expanded outfits and mounts.</li>
              <li><strong>Events and raids:</strong> Last Man Standing, Team Battle, Zombie Event, Death Match, Capture the Flag, Pandora, Castle War, real-Tibia raids, and rare bosses around the map.</li>
              <li><strong>Endgame:</strong> The thread names Ancient Spawn of Morgathla as a final boss and highlights high-level hunting zones for approximately level 300–400 and above.</li>
            </ul>
          </section>

          <section id="pvp"><SectionHeading>Hardcore PvP &amp; Community Play</SectionHeading>
            <p>Ezodus was marketed as always-hardcore PvP, with the launch post recommending that players form a team. The described PvP package includes a balanced system based on long-term testing, Retro PvP, a frag system, and client notifications for events and raids.</p>
            <p>A later thread update claimed more than 600 active players after the start and discussed possible vocation balancing changes. That is a historical community signal, not a current population measurement; the directory currently records a zero-player snapshot and the official site needs to be checked for live status.</p>
          </section>

          <section id="sources"><SectionHeading>Sources &amp; Current Verification</SectionHeading>
            <div className="cyntara-wiki__callout"><strong>Verification note</strong><p>The OtLand thread provides the dated launch context, host, rates, features, and community discussion. The official Ezodus website is currently protected by Cloudflare verification in this environment, so current online status, downloads, rules, Discord links, and season details remain unconfirmed.</p></div>
            <p>Before joining, compare the current official client and account path with the directory listing, confirm the protocol you need, review the current PvP and trade rules, and verify that any advertised event or rate is still active.</p>
          </section>

          <section id="external-links"><SectionHeading>External Links</SectionHeading>
            <ul>
              <li><a href="https://www.ezodus.net/" target="_blank" rel="nofollow noopener noreferrer">Official Ezodus Website (ezodus.net)</a></li>
              <li><a href="https://otland.net/threads/france-10-00-15-22-start-20th-february-2026-18-00-castle-war-event-tc-rl-trade-allowed-unhallowed-crypt-weapon-proficiency-bloodfire-g.268643/" target="_blank" rel="nofollow noopener noreferrer">OtLand launch thread</a></li>
              <li><a href="https://otland.net/forums/server-gala.43/" target="_blank" rel="nofollow noopener noreferrer">OtLand Server Gala forum</a></li>
              <li><a href="/">OpenTibiaServers directory</a></li>
            </ul>
          </section>
        </main>

        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox">
          <div className="cyntara-wiki__infobox-header">Ezodus</div>
          <img className="cyntara-wiki__logo" src="/images/server-logos/ezodus.png" alt="Ezodus server logo" />
          <table><tbody>
            <tr><th>Host</th><td><code>ezodus.net:7171</code></td></tr>
            <tr><th>Region</th><td>France / Europe</td></tr>
            <tr><th>Server type</th><td>Real map / high-rate</td></tr>
            <tr><th>Protocols</th><td>10.00 and 12.30+</td></tr>
            <tr><th>PvP</th><td>Hardcore PvP / Retro PvP</td></tr>
            <tr><th>Skill / magic</th><td>25x / 4x</td></tr>
            <tr><th>Loot</th><td>2x</td></tr>
            <tr><th>Source</th><td>OtLand Server Gala</td></tr>
            <tr><th>Current status</th><td>Verify at official site</td></tr>
          </tbody></table>
        </div></aside>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}
