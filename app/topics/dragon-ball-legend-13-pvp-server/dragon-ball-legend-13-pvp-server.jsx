import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-pvp-server');
}

export default function DragonBallLegend13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-pvp-server" />;
}
