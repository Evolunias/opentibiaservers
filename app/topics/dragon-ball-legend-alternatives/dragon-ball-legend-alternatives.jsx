import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-alternatives');
}

export default function DragonBallLegendAlternativesKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-alternatives" />;
}
