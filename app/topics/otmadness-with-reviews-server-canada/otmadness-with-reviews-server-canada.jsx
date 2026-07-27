import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-canada');
}

export default function OtmadnessWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-canada" />;
}
