import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-pvpe-server');
}

export default function DragonBallLegend15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-pvpe-server" />;
}
