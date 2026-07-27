import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-usa');
}

export default function DragonBallLegendPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-usa" />;
}
