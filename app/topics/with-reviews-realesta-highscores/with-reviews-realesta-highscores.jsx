import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-highscores');
}

export default function WithReviewsRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-highscores" />;
}
