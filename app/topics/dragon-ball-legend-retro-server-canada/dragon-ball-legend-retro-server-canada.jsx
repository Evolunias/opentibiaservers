import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-canada');
}

export default function DragonBallLegendRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-canada" />;
}
