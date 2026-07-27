import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-guide');
}

export default function WithReviewsHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-guide" />;
}
