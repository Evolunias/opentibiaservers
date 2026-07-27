import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-poland');
}

export default function OtmadnessWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-poland" />;
}
