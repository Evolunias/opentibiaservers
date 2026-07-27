import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-usa');
}

export default function OtmadnessWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-usa" />;
}
