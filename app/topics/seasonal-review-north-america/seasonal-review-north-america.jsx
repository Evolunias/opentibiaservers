import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-north-america');
}

export default function SeasonalReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-north-america" />;
}
