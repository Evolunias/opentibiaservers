import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-highscores');
}

export default function WithReviewsKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-highscores" />;
}
