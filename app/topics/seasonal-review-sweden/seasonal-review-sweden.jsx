import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-sweden');
}

export default function SeasonalReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-sweden" />;
}
