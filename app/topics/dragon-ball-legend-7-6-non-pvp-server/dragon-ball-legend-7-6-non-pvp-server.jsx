import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-7-6-non-pvp-server');
}

export default function DragonBallLegend76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-7-6-non-pvp-server" />;
}
