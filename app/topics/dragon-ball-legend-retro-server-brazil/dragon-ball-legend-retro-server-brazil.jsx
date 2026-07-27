import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-brazil');
}

export default function DragonBallLegendRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-brazil" />;
}
