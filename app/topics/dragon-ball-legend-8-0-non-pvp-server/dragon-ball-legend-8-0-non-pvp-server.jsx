import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-0-non-pvp-server');
}

export default function DragonBallLegend80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-0-non-pvp-server" />;
}
