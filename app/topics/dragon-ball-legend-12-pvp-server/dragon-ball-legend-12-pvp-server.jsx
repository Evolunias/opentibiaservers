import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-pvp-server');
}

export default function DragonBallLegend12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-pvp-server" />;
}
