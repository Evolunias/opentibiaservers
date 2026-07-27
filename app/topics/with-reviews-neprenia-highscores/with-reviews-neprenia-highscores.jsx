import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-highscores');
}

export default function WithReviewsNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-highscores" />;
}
