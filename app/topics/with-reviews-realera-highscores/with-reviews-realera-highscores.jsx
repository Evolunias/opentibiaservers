import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-highscores');
}

export default function WithReviewsRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-highscores" />;
}
