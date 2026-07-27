import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-highscores');
}

export default function WithReviewsEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-highscores" />;
}
