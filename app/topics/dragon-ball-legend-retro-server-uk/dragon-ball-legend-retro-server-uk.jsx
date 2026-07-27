import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-uk');
}

export default function DragonBallLegendRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-uk" />;
}
