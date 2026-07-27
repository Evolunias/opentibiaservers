import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-pvp-server');
}

export default function DragonBallLegend14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-pvp-server" />;
}
