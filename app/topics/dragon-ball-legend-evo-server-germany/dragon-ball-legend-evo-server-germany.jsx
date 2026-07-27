import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-germany');
}

export default function DragonBallLegendEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-germany" />;
}
