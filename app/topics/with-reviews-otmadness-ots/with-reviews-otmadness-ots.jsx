import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-ots');
}

export default function WithReviewsOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-ots" />;
}
