import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-11-pvp-server');
}

export default function DragonBallLegend11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-11-pvp-server" />;
}
