import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-10-0-pvp-server');
}

export default function DragonBallLegend100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-10-0-pvp-server" />;
}
