import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-brazil');
}

export default function DragonBallLegendNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-brazil" />;
}
