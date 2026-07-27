import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-similar-servers');
}

export default function DragonBallLegendSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-similar-servers" />;
}
