import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-sweden');
}

export default function DragonBallLegendPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-sweden" />;
}
