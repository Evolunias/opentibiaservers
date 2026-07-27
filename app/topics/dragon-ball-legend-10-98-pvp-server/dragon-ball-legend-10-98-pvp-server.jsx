import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-10-98-pvp-server');
}

export default function DragonBallLegend1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-10-98-pvp-server" />;
}
