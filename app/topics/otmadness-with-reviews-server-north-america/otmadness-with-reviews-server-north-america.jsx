import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-north-america');
}

export default function OtmadnessWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-north-america" />;
}
