import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-usa');
}

export default function DragonBallLegendRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-usa" />;
}
