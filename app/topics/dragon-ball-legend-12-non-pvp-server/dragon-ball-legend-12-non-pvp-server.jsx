import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-non-pvp-server');
}

export default function DragonBallLegend12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-non-pvp-server" />;
}
