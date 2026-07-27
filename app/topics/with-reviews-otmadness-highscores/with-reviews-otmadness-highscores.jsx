import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-highscores');
}

export default function WithReviewsOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-highscores" />;
}
