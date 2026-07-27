import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-south-america');
}

export default function DragonBallLegendPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-south-america" />;
}
