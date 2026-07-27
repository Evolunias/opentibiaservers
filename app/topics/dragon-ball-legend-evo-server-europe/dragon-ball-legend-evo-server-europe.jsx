import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-europe');
}

export default function DragonBallLegendEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-europe" />;
}
