import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-ot-server');
}

export default function WithReviewsOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-ot-server" />;
}
