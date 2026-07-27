import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-non-pvp-server');
}

export default function DragonBallLegend15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-non-pvp-server" />;
}
