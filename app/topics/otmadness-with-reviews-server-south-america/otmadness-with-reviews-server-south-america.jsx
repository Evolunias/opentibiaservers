import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-south-america');
}

export default function OtmadnessWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-south-america" />;
}
