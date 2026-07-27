import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-highscores');
}

export default function WithReviewsDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-highscores" />;
}
