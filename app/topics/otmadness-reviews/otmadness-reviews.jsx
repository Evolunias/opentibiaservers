import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-reviews');
}

export default function OtmadnessReviewsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-reviews" />;
}
