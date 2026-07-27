import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-sweden');
}

export default function DragonBallLegendPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-sweden" />;
}
