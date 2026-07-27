import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp');
}

export default function DragonBallLegendPvpKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp" />;
}
