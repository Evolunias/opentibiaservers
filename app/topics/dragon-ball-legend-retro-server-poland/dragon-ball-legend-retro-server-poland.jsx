import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-poland');
}

export default function DragonBallLegendRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-poland" />;
}
