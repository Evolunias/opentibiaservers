import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-south-america');
}

export default function SeasonalReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-south-america" />;
}
