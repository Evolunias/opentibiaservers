import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-pvpe-server');
}

export default function DragonBallLegend13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-pvpe-server" />;
}
