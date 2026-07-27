import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-highscores');
}

export default function WithReviewsHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-highscores" />;
}
