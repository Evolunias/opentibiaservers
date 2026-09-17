import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

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
import IglaotsWikiPage from '@/app/components/IglaotsWikiPage';
import TaleonWikiPage from '@/app/components/TaleonWikiPage';

export async function buildServerSlugMetadata(slug) {
  const value = String(slug || '').toLowerCase();
  if (value === 'aurera-global') {
    return {
      title: 'Aurera Global | OpenTibiaServers Wiki',
      description: 'A detailed Aurera Global guide covering worlds, Retro-PvP, rates, events, rules, client paths, and current verification.',
      alternates: { canonical: '/aurera-global' },
    };
  }
  if (value === 'kaldrox') {
    return {
      title: 'Kaldrox | OpenTibiaServers Wiki',
      description: 'A detailed Kaldrox guide covering the 8.60 Global Map profile, staged rates, PvP, systems, client verification, and current source notes.',
      alternates: { canonical: '/kaldrox' },
    };
  }
  if (value === 'miracle74') {
    return {
      title: 'Miracle 7.4 Server Guide: Rates, Mechanics, Client & Launch History',
      description: 'An evidence-led Miracle 7.4 guide covering 1x rates, PvP, classic mechanics, custom systems, client safety, sources, and the May 2024 launch record.',
      alternates: { canonical: '/miracle74' },
    };
  }
  if (value === 'noxiousot') {
    return {
      title: 'NoxiousOT Server Guide: Rates, Rules, Clients & PvP Features',
      description: 'An evidence-led NoxiousOT 8.60 guide covering staged rates, PvP events, custom islands, magic items, official clients, rules, activity, and sources.',
      alternates: { canonical: '/noxiousot' },
    };
  }
  if (value === 'amonot') {
    return {
      title: 'AmonOT Server Guide: Horus Rates, PvP, Client & Systems',
      description: 'An evidence-led AmonOT guide covering Horus staged rates, Retro Open PvP, tasks, addons, VIP, loyalty, bazaar, official client downloads, and world verification.',
      alternates: { canonical: '/amonot' },
    };
  }
  if (value === 'nostalrius') {
    return {
      title: 'Nostalrius 7.4 Server Wiki: Rates, PvP, Systems & Client',
      description: 'An evidence-led Nostalrius 7.4 Wiki guide covering Retro Open PvP, staged rates, stamina, Forge, Tier systems, bosses, events, rules, and official downloads.',
      alternates: { canonical: '/nostalrius' },
    };
  }
  if (value === 'sandots') {
    return {
      title: 'SandOTS Server Guide: Rates, Reborn, PvP, Tasks & Client',
      description: 'SandOTS server guide covering its 8.6 PVP listing, x500 snapshot, Reborn system, tasks, dungeons, PvP rules, safe client path, and official sources.',
      alternates: { canonical: '/sandots' },
    };
  }
  if (value === 'paulistinhaot') {
    return {
      title: 'PaulistinhaOT Server Guide: Worlds, PvP, Updates & Client',
      description: 'PaulistinhaOT server guide covering Deletera, Lordebra and Arkadia worlds, PvP modes, 15.30 updates, task systems, Targuna, safe client links, and live listing context.',
      alternates: { canonical: '/paulistinhaot' },
    };
  }
  if (value === 'calmera') {
    return {
      title: 'Calmera Server Guide: Worlds, Rates, PvP, Client & Activity',
      description: 'Calmera server guide covering Anthera and Emporium, 300x rates, Optional PvP, instances, the CTC Launcher, dated directory activity, safe source links, and community context.',
      alternates: { canonical: '/calmera' },
    };
  }
  if (value === 'rexia') {
    return {
      title: 'Rexia 8.60 Server Guide: Rates, Reborn, PvP, Systems & Client',
      description: 'Rexia 8.60 server guide covering official staged rates, Reborn requirements, level-200k PvP, tasks, instances, systems, markets, safe client links, activity, and community sources.',
      alternates: { canonical: '/rexia' },
    };
  }
  if (value === 'oxygenot') {
    return {
      title: 'OxygenOT Server Guide: PvP-E, Systems, Client & Activity',
      description: 'OxygenOT server guide covering Open PvP, weekly PvP-E, client updates, quests, dungeons, bosses, daily tasks, attributes, Hunt Analyzer, safe downloads, activity, and sources.',
      alternates: { canonical: '/oxygenot' },
    };
  }
  if (value === 'iglaots') {
    return {
      title: 'IglaOTS Server Guide: 15.30 PvP, Task Board, Forge & Client',
      description: 'IglaOTS 15.30 server guide covering Retro PvP, Season, Offseason, Lowrate, Task Board, Forge, Enchanting, bosses, charms, client safety, activity, and official wiki sources.',
      alternates: { canonical: '/iglaots' },
    };
  }
  if (value === 'taleon') {
    return {
      title: 'Taleon Server Guide: SAN vs Aura, Rates, Client & Systems',
      description: 'Taleon server guide comparing SAN and Aura, current rates and client signals, quests, bosses, custom systems, safe downloads, history, and FAQs.',
      keywords: ['Taleon', 'Taleon server', 'Taleon SAN', 'Taleon Aura', 'Taleon rates', 'Taleon download', 'Taleon client', 'Open Tibia server'],
      alternates: { canonical: '/taleon' },
      openGraph: {
        title: 'Taleon Server Guide: SAN vs Aura, Rates, Client & Systems',
        description: 'Compare Taleon SAN and Aura, understand rates, clients, systems, downloads, and world differences before joining.',
        url: '/taleon',
        type: 'article',
      },
    };
  }
  return buildCanonicalServerMetadata(value);
}

export default async function ServerSlugPage({ slug }) {
  const value = String(slug || '').toLowerCase();

  if (value === 'demolidores') return <DemolidoresWikiPage />;
  if (value === 'ezodus') return <EzodusWikiPage />;
  if (value === 'rubinot') return <RubinotWikiPage />;
  if (value === 'exordion') return <ExordionWikiPage />;
  if (value === 'realera') return <RealeraWikiPage />;
  if (value === 'aurera-global') return <AureraGlobalWikiPage />;
  if (value === 'kaldrox') return <KaldroxWikiPage />;
  if (value === 'ixodus') return <IxodusWikiPage />;
  if (value === 'miracle74') return <Miracle74WikiPage />;
  if (value === 'noxiousot') return <NoxiousOTWikiPage />;
  if (value === 'amonot') return <AmonotWikiPage />;
  if (value === 'nostalrius') return <NostalriusWikiPage />;
  if (value === 'sandots') return <SandotsWikiPage />;
  if (value === 'paulistinhaot') return <PaulistinhaotWikiPage />;
  if (value === 'calmera') return <CalmeraWikiPage />;
  if (value === 'rexia') return <RexiaWikiPage />;
  if (value === 'oxygenot') return <OxygenotWikiPage />;
  if (value === 'iglaots') return <IglaotsWikiPage />;
  if (value === 'taleon') return <TaleonWikiPage />;
  const { default: CanonicalServerRoute } = await import('@/app/components/CanonicalServerRoute');
  return <CanonicalServerRoute slug={value} />;
}

