import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-canada');
}

export default function DragonBallLegendPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-canada" />;
}
