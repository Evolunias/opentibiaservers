import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';
import RubinotWikiPage from '@/app/components/RubinotWikiPage';
import ExordionWikiPage from '@/app/components/ExordionWikiPage';
import RealeraWikiPage from '@/app/components/RealeraWikiPage';
import AureraGlobalWikiPage from '@/app/components/AureraGlobalWikiPage';
import KaldroxWikiPage from '@/app/components/KaldroxWikiPage';
import DemolidoresWikiPage from '@/app/components/DemolidoresWikiPage';
import IxodusWikiPage from '@/app/components/IxodusWikiPage';
import Miracle74WikiPage from '@/app/components/Miracle74WikiPage';
import NoxiousOTWikiPage from '@/app/components/NoxiousOTWikiPage';
import AmonotWikiPage from '@/app/components/AmonotWikiPage';
import NostalriusWikiPage from '@/app/components/NostalriusWikiPage';
import SandotsWikiPage from '@/app/components/SandotsWikiPage';
import PaulistinhaotWikiPage from '@/app/components/PaulistinhaotWikiPage';
import CalmeraWikiPage from '@/app/components/CalmeraWikiPage';
import RexiaWikiPage from '@/app/components/RexiaWikiPage';
import OxygenotWikiPage from '@/app/components/OxygenotWikiPage';

export async function generateMetadata({ params }) {
  if (params.slug === 'aurera-global') {
    return {
      title: 'Aurera Global | OpenTibiaServers Wiki',
      description: 'A wiki-style Aurera Global guide covering worlds, Retro-PvP, rates, events, rules, client paths, and current verification.',
    };
  }
  if (params.slug === 'kaldrox') {
    return {
      title: 'Kaldrox | OpenTibiaServers Wiki',
      description: 'A wiki-style Kaldrox guide covering the 8.60 Global Map profile, staged rates, PvP, systems, client verification, and current source notes.',
    };
  }
  if (params.slug === 'miracle74') {
    return {
      title: 'Miracle 7.4 Server Guide: Rates, Mechanics, Client & Launch History',
      description: 'An evidence-led Miracle 7.4 guide covering 1x rates, PvP, classic mechanics, custom systems, client safety, sources, and the May 2024 launch record.',
    };
  }
  if (params.slug === 'noxiousot') {
    return {
      title: 'NoxiousOT Server Guide: Rates, Rules, Clients & PvP Features',
      description: 'An evidence-led NoxiousOT 8.60 guide covering staged rates, PvP events, custom islands, magic items, official clients, rules, activity, and sources.',
    };
  }
  if (params.slug === 'amonot') {
    return {
      title: 'AmonOT Server Guide: Horus Rates, PvP, Client & Systems',
      description: 'An evidence-led AmonOT guide covering Horus staged rates, Retro Open PvP, tasks, addons, VIP, loyalty, bazaar, official client downloads, and world verification.',
    };
  }
  if (params.slug === 'nostalrius') {
    return {
      title: 'Nostalrius 7.4 Server Wiki: Rates, PvP, Systems & Client',
      description: 'An evidence-led Nostalrius 7.4 Wiki guide covering Retro Open PvP, staged rates, stamina, Forge, Tier systems, bosses, events, rules, and official downloads.',
    };
  }
  if (params.slug === 'sandots') {
    return {
      title: 'SandOTS Server Guide: Rates, Reborn, PvP, Tasks & Client',
      description: 'SandOTS server guide covering its 8.6 PVP listing, x500 snapshot, Reborn system, tasks, dungeons, PvP rules, safe client path, and official sources.',
    };
  }
  if (params.slug === 'paulistinhaot') {
    return {
      title: 'PaulistinhaOT Server Guide: Worlds, PvP, Updates & Client',
      description: 'PaulistinhaOT server guide covering Deletera, Lordebra and Arkadia worlds, PvP modes, 15.30 updates, task systems, Targuna, safe client links, and live listing context.',
    };
  }
  if (params.slug === 'calmera') {
    return {
      title: 'Calmera Server Guide: Worlds, Rates, PvP, Client & Activity',
      description: 'Calmera server guide covering Anthera and Emporium, 300x rates, Optional PvP, instances, the CTC Launcher, dated directory activity, safe source links, and community context.',
    };
  }
  if (params.slug === 'rexia') {
    return {
      title: 'Rexia 8.60 Server Guide: Rates, Reborn, PvP, Systems & Client',
      description: 'Rexia 8.60 server guide covering official staged rates, Reborn requirements, level-200k PvP, tasks, instances, systems, markets, safe client links, activity, and community sources.',
    };
  }
  if (params.slug === 'oxygenot') {
    return {
      title: 'OxygenOT Server Guide: PvP-E, Systems, Client & Activity',
      description: 'OxygenOT server guide covering Open PvP, weekly PvP-E, client updates, quests, dungeons, bosses, daily tasks, attributes, Hunt Analyzer, safe downloads, activity, and sources.',
    };
  }
  const wikiSlugs = ['iglaots', 'nostalrius', 'taleon'];
  if (wikiSlugs.includes(String(params.slug || '').toLowerCase())) {
    const name = String(params.slug).replace(/-/g, ' ');
    return {
      title: `${name.replace(/\b\w/g, (letter) => letter.toUpperCase())} Server Guide | OpenTibiaServers Wiki`,
      description: `Wiki-style ${name} guide covering server rates, client information, systems, activity, official sources, and how to start.`,
    };
  }
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ServerSlugPage({ params }) {
  const slug = String(params.slug || '').toLowerCase();

  if (slug === 'demolidores') return <DemolidoresWikiPage />;
  if (slug === 'ezodus') return <EzodusWikiPage />;
  if (slug === 'rubinot') return <RubinotWikiPage />;
  if (slug === 'exordion') return <ExordionWikiPage />;
  if (slug === 'realera') return <RealeraWikiPage />;
  if (slug === 'aurera-global') return <AureraGlobalWikiPage />;
  if (slug === 'kaldrox') return <KaldroxWikiPage />;
  if (slug === 'ixodus') return <IxodusWikiPage />;
  if (slug === 'miracle74') return <Miracle74WikiPage />;
  if (slug === 'noxiousot') return <NoxiousOTWikiPage />;
  if (slug === 'amonot') return <AmonotWikiPage />;
  if (slug === 'nostalrius') return <NostalriusWikiPage />;
  if (slug === 'sandots') return <SandotsWikiPage />;
  if (slug === 'paulistinhaot') return <PaulistinhaotWikiPage />;
  if (slug === 'calmera') return <CalmeraWikiPage />;
  if (slug === 'rexia') return <RexiaWikiPage />;
  if (slug === 'oxygenot') return <OxygenotWikiPage />;
  return <CanonicalServerRoute slug={slug} />;
}
