import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-server');
}

export default function WithReviewsOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-server" />;
}
