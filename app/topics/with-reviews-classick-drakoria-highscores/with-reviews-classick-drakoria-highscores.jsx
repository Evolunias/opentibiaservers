import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-highscores');
}

export default function WithReviewsClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-highscores" />;
}
