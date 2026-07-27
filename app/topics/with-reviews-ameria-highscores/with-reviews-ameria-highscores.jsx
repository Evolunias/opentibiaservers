import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-highscores');
}

export default function WithReviewsAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-highscores" />;
}
