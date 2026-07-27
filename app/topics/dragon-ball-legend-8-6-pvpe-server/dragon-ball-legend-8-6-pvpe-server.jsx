import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-6-pvpe-server');
}

export default function DragonBallLegend86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-6-pvpe-server" />;
}
