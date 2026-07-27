import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-argentina');
}

export default function DragonBallLegendRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-argentina" />;
}
