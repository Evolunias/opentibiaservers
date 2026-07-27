import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-trailer');
}

export default function DragonBallLegendTrailerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-trailer" />;
}
