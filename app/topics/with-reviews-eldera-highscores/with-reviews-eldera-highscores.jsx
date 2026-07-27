import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-highscores');
}

export default function WithReviewsElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-highscores" />;
}
