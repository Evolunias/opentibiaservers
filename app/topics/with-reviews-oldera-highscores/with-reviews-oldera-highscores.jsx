import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-highscores');
}

export default function WithReviewsOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-highscores" />;
}
