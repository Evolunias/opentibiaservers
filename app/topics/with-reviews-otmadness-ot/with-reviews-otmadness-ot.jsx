import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-ot');
}

export default function WithReviewsOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-ot" />;
}
