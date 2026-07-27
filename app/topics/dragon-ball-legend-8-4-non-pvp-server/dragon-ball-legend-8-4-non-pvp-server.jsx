import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-4-non-pvp-server');
}

export default function DragonBallLegend84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-4-non-pvp-server" />;
}
