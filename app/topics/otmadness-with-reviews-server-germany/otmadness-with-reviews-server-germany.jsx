import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-germany');
}

export default function OtmadnessWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-germany" />;
}
