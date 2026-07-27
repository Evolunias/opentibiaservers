import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-highscores');
}

export default function WithReviewsNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-highscores" />;
}
