import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-brazil');
}

export default function DragonBallLegendPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-brazil" />;
}
