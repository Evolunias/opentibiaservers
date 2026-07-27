import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-evo-servers');
}

export default function DragonBallLegend14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-evo-servers" />;
}
