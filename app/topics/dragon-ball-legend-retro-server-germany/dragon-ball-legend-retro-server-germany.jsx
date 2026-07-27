import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-germany');
}

export default function DragonBallLegendRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-germany" />;
}
