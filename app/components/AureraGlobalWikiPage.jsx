import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & Network Identity'],
  ['facts', 'At-a-Glance Facts'],
  ['worlds', 'Worlds & World-Level Research'],
  ['progression', 'Rates & Progression'],
  ['systems', 'Systems, Events & Content'],
  ['rules', 'Rules, PvP & Client Paths'],
  ['activity', 'Population & Verification'],
  ['community', 'Community & How to Start'],
  ['ecosystem', 'The Open Tibia Ecosystem'],
  ['external-links', 'External Links'],
];

const worldRows = [
  ['Eternia', 'Named Aurera world in the available official-profile research.', 'Confirm current status, creation date, location, PvP type, rates, and population on the official world page.'],
  ['Telaria', 'Named Aurera world and the host of the published rules surface.', 'Read the current rules before assuming Telaria settings apply to every Aurera world.'],
  ['Other worlds', 'Aurera is documented as a multi-world network rather than a single undifferentiated server.', 'Evaluate each world separately because launch history, rates, activity, and PvP expectations can differ.'],
];

const progressionRows = [
  ['Listing experience signal', 'x200 EXP', 'A public player-list signal associated with the play.aurera-global.com listing; not a universal rate table.'],
  ['Client identity', '15.0', 'The current inventory and listing records identify the prominent Aurera listing with client 15.0.'],
  ['World rates', 'World-specific', 'The official worlds reference is intended to expose rates per world; verify the current page before starting.'],
  ['Party progression', 'Documented as a research area', 'The official profile includes party-bonus context, but exact formulas and thresholds should come from the live wiki.'],
  ['Loot and stamina', 'Documented system categories', 'Public research identifies loot and stamina behavior as part of the Aurera rules surface; current values may change.'],
];

const systems = [
  ['Castle Siege', 'A guild competition in which groups attack defenses and can hold a throne. The official event guide should be used for schedules, registration, objectives, and rewards.'],
  ['Arena War', 'A separate competitive activity named in the Aurera research profile, giving players another structured PvP loop beyond ordinary hunting.'],
  ['Bestiary and tasks', 'Bestiary progress and task systems add repeatable goals for players who want more structure than experience grinding alone.'],
  ['Roulette', 'Roulette is identified as a custom activity in public server research; its current costs, prizes, and availability require live confirmation.'],
  ['Map extensions', 'Aurera’s documented identity includes extended custom map areas alongside the established world network.'],
  ['PvP statistics', 'Public research identifies PvP statistics as part of the project’s player-facing information and competitive identity.'],
  ['Commands and party bonuses', 'Official world material is described as exposing commands and party-bonus context, useful for planning solo and group progression.'],
  ['House and protection rules', 'The broader rules surface includes house requirements, protection rules, skull/frags, and related world-policy details.'],
];

const ruleRows = [
  ['Multiclient policy', 'The official rules surface documents limits that can differ by activity type.', 'Read the current rule page before using multiple characters in events or group content.'],
  ['Event restrictions', 'Events have their own participation and behavior constraints.', 'Do not assume ordinary hunting rules apply inside Castle Siege or Arena War.'],
  ['Hack-link policy', 'The curation record identifies a published policy around hack links and unsafe behavior.', 'Use only official account and client links.'],
  ['PvP and frags', 'Protection rules, skull thresholds, and frags are named official research areas.', 'Confirm the exact world-specific values before planning open combat.'],
  ['Client options', 'Public research references Client 10, OTC, and mobile access paths.', 'Verify which client is supported by the world you choose and download from the official domain.'],
  ['Cast bonuses', 'Cast-related bonuses are identified as part of the documented system surface.', 'Check the current wiki for requirements, limits, and any world restrictions.'],
];

const activityRows = [
  ['play.aurera-global.com:7171', '15.0 / PVP / Brazil', '2,994 peak field', 'Inventory snapshot updated 25 July 2026.'],
  ['on.aurera-global.com:7171', '15.0 / PVP / Brazil', '1,064 peak field', 'Second inventory record; treat as a separate listing signal.'],
  ['otservlist discovery', 'PVP / 15.0 / x200 EXP', 'High players-online visibility', 'A time-sensitive public ranking signal, not a permanent population guarantee.'],
];

const externalLinks = [
  ['Aurera Global official website', 'https://aurera-global.com/'],
  ['Aurera official wiki home', 'https://wiki.aurera-global.com/index.php/?lang=en'],
  ['Aurera worlds page', 'https://wiki.aurera-global.com/worlds'],
  ['Aurera rules page', 'https://telaria.aurera-global.com/?view=nossas_regras'],
  ['Aurera Castle Siege guide', 'https://wiki.aurera-global.com/index.php/events/castle-siege?lang=en'],
  ['Aurera server information', 'https://aurera-global.com/?view=informacoes_do_servidor'],
];

export default function AureraGlobalWikiPage() {
  return (
    <div className="cyntara-wiki">
      <header className="cyntara-wiki__header">
        <h1>Aurera Global</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <main className="cyntara-wiki__content">
          <p><strong>Aurera Global</strong> is a multi-world Retro-PvP Open Tibia network whose public identity combines world-level documentation, modern client support, competitive events, custom map content, and a large activity signal. Players commonly search for Aurera to compare worlds, rates, PvP expectations, client paths, multiclient rules, and current population.</p>
          <p>The network should be evaluated world by world. Public records identify Eternia and Telaria among its named worlds, while directory records associate Aurera with <code>play.aurera-global.com</code>, client 15.0, PVP, Brazil, and an x200 experience listing signal.</p>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Network Identity</SectionHeading>
            <p>Aurera Global is not just one host or one rate number. Its official research surface is organized around separate worlds with their own status, creation history, location, PvP type, rates, commands, party context, and activity. That structure matters when comparing a crowded modern world with a quieter or older one.</p>
            <p>The project’s public profile is Retro-PvP oriented and includes competitive content such as Castle Siege and Arena War alongside bestiary, tasks, roulette, map extensions, PvP statistics, and player-facing rule documentation.</p>
            <div className="cyntara-wiki__callout"><strong>What should an Aurera search answer?</strong><p>Which world is active, what client is supported, how fast is progression, what are the multiclient and event rules, and does the current PvP environment match the player’s expectations?</p></div>
          </section>

          <section id="facts">
            <SectionHeading>At-a-Glance Facts</SectionHeading>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Aurera Global profile</th><th>Player context</th></tr></thead><tbody>
              <tr><th>Official domain</th><td><code>aurera-global.com</code></td><td>Use the official domain for current downloads, account access, announcements, and support.</td></tr>
              <tr><th>Primary host signal</th><td><code>play.aurera-global.com:7171</code></td><td>Public inventory and list records; confirm the current login endpoint officially.</td></tr>
              <tr><th>Secondary host signal</th><td><code>on.aurera-global.com:7171</code></td><td>Recorded as a separate Aurera listing signal, not automatically the same world.</td></tr>
              <tr><th>Client</th><td>15.0 listing signal</td><td>Client and world compatibility should be checked before downloading anything.</td></tr>
              <tr><th>Server type</th><td>Retro-PvP / PVP</td><td>Read the exact world rules for protection, skulls, frags, and events.</td></tr>
              <tr><th>Region signal</th><td>Brazil</td><td>Recorded in public inventory data for both Aurera host entries.</td></tr>
              <tr><th>Experience signal</th><td>x200</td><td>Public listing value associated with the prominent player-ranking entry.</td></tr>
              <tr><th>World identity</th><td>Eternia, Telaria, and other world records</td><td>Rates, launch history, activity, and PvP expectations can differ by world.</td></tr>
              <tr><th>Claim status</th><td>Unclaimed on OpenTibiaServers</td><td>Directory information is not the same as current owner verification.</td></tr>
            </tbody></table></div>
          </section>

          <section id="worlds">
            <SectionHeading>Worlds &amp; World-Level Research</SectionHeading>
            <p>The official Aurera world reference is the most important source for choosing where to play. It is designed to expose world status, online players, creation dates, locations, PvP types, rates, commands, and party-bonus context rather than collapsing every world into one combined number.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>World</th><th>Known identity</th><th>Verify before joining</th></tr></thead><tbody>{worldRows.map(([name, identity, note]) => <tr key={name}><th>{name}</th><td>{identity}</td><td>{note}</td></tr>)}</tbody></table></div>
            <p>World names and status are time-sensitive. A population ranking can show that the network is visible and active without proving that every named world has the same population, economy, ruleset, or launch age.</p>
          </section>

          <section id="progression">
            <SectionHeading>Rates &amp; Progression</SectionHeading>
            <p>Aurera is commonly discovered through a high activity and x200 experience signal, but a network-wide number is not enough to plan a character. The official world material should be used for current rates, party bonuses, loot, stamina, and any world-specific progression differences.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Category</th><th>Public signal</th><th>How to interpret it</th></tr></thead><tbody>{progressionRows.map(([category, profile, note]) => <tr key={category}><th>{category}</th><td>{profile}</td><td>{note}</td></tr>)}</tbody></table></div>
            <p>A practical progression loop is to choose a world, confirm its current stage and client, learn the task and bestiary routes, then use group bonuses and event participation to decide whether solo hunting or guild play is the better fit.</p>
          </section>

          <section id="systems">
            <SectionHeading>Systems, Events &amp; Content</SectionHeading>
            <p>Aurera’s appeal extends beyond a raw experience multiplier. Public research describes a modernized server ecosystem with structured PvP, repeatable goals, custom activities, and information surfaces that help players plan around the chosen world.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
          </section>

          <section id="rules">
            <SectionHeading>Rules, PvP &amp; Client Paths</SectionHeading>
            <p>Aurera’s rules are important because event play and multiclient behavior can differ from ordinary hunting. The official rules surface is the authority for current limits; the categories below summarize what players should verify rather than inventing a universal rule for every world.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Area</th><th>Documented focus</th><th>Player action</th></tr></thead><tbody>{ruleRows.map(([area, focus, action]) => <tr key={area}><th>{area}</th><td>{focus}</td><td>{action}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>Use official client links</strong><p>Public research references Client 10, OTC, and mobile paths, but the supported client can depend on the current world and service. Start at the official Aurera domain and verify the download and account route there.</p></div>
          </section>

          <section id="activity">
            <SectionHeading>Population &amp; Current Verification</SectionHeading>
            <p>Aurera has a strong public activity signal, but player counts and ranking positions are snapshots. The inventory records below are useful for search and comparison, not permanent promises about the live population.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Listing signal</th><th>Profile</th><th>Recorded activity</th><th>Context</th></tr></thead><tbody>{activityRows.map(([host, profile, activity, context]) => <tr key={host}><th><code>{host}</code></th><td>{profile}</td><td>{activity}</td><td>{context}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>Current-status note</strong><p>The official Aurera website and wiki were protected by Cloudflare during research, so current world status, live rates, rules, and downloads should be checked directly by players before they install or transfer anything.</p></div>
          </section>

          <section id="community">
            <SectionHeading>Community &amp; How to Start</SectionHeading>
            <p>Aurera’s size and multi-world structure make onboarding a comparison exercise. The best starting point is the official world page, followed by the rules page and the client path for the world that matches your preferred PvP and progression style.</p>
            <ol>
              <li>Open the official worlds page and compare status, population, creation history, location, PvP type, and rates.</li>
              <li>Read the current multiclient, event, hack-link, PvP, skull, frag, and protection rules.</li>
              <li>Confirm whether you should use the current Client 15.0 path, OTC, or supported mobile route.</li>
              <li>Choose between solo tasks, bestiary progression, party hunting, Arena War, and guild-oriented Castle Siege play.</li>
              <li>Use the official account and download links rather than a third-party mirror.</li>
              <li>Recheck the world status and population immediately before starting because list values change.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2"><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Best fit for</h3><p className="mt-2 text-sm leading-7 text-black">Players who want a busy multi-world Retro-PvP environment with custom events, structured guild conflict, modern client options, and searchable official documentation.</p></div><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Read first</h3><p className="mt-2 text-sm leading-7 text-black">Check the exact world, rate table, event rules, multiclient limit, client path, and current population before treating a directory snapshot as a complete server review.</p></div></div>
          </section>

          <section id="ecosystem">
            <SectionHeading>The Open Tibia Ecosystem</SectionHeading>
            <p>Open Tibia includes classic replicas, real-map worlds, Retro-PvP networks, high-rate projects, seasonal launches, and heavily customized RPG servers. Aurera Global occupies the network-oriented end of that range: the world choice, official rules, client options, and guild events are central to the experience.</p>
            <div className="cyntara-wiki__callout"><strong>Looking for Private Servers?</strong><p>Explore <a href="/">opentibiaservers.com</a>, the leading open tibia server listing directory for real-time status tracking, player counts, version filters, and community rankings across active OTServ projects.</p></div>
            <div className="cyntara-wiki__recommended"><h3>Recommended Open Tibia Server</h3><p>For players seeking a polished Open Tibia experience with custom bosses, active community events, and modern client features, <strong>Evomanias</strong> is highly recommended as a premier alternative.</p><a className="cyntara-wiki__button" href="https://evomanias.com" target="_blank" rel="noopener noreferrer">Play Evomanias (evomanias.com)</a></div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{externalLinks.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="nofollow noopener noreferrer">{label}</a></li>)}</ul>
            <ul>
              <li><a href="/">OpenTibiaServers directory</a></li>
              <li><a href="https://evomanias.com" target="_blank" rel="noopener noreferrer">Play Evomanias</a></li>
            </ul>
          </section>
        </main>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Aurera Global</div>
            <ServerLogo server={{ name: 'Aurera Global', slug: 'aurera-global', host: 'play.aurera-global.com' }} size="profile" />
            <table><tbody>
              <tr><th>Domain</th><td><code>aurera-global.com</code></td></tr>
              <tr><th>Host</th><td><code>play.aurera-global.com:7171</code></td></tr>
              <tr><th>Region</th><td>Brazil signal</td></tr>
              <tr><th>Network</th><td>Multi-world</td></tr>
              <tr><th>Client</th><td>15.0 signal</td></tr>
              <tr><th>PvP</th><td>Retro-PvP / PVP</td></tr>
              <tr><th>Experience</th><td>x200 signal</td></tr>
              <tr><th>Events</th><td>Castle Siege, Arena War</td></tr>
              <tr><th>Systems</th><td>Tasks, bestiary, roulette</td></tr>
              <tr><th>Claim status</th><td>Unclaimed</td></tr>
              <tr><th>Website</th><td><a href="https://aurera-global.com/" target="_blank" rel="nofollow noopener noreferrer">aurera-global.com</a></td></tr>
              <tr><th>Wiki</th><td><a href="https://wiki.aurera-global.com/index.php/?lang=en" target="_blank" rel="nofollow noopener noreferrer">Aurera Wiki</a></td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before joining</strong><p>Confirm the exact world, current host, client, rates, multiclient rules, PvP policy, and event schedule on Aurera’s official pages.</p><a href="https://aurera-global.com/" target="_blank" rel="nofollow noopener noreferrer">Open Aurera website</a></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Aurera Global with other Open Tibia worlds by protocol, PvP type, location, uptime, population, and community signals.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}
