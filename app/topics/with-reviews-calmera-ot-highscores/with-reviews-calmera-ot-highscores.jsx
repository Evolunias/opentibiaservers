import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-calmera-ot-highscores');
}

export default function WithReviewsCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-calmera-ot-highscores" />;
}
