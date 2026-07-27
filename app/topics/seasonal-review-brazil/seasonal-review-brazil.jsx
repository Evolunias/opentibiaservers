import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-brazil');
}

export default function SeasonalReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-brazil" />;
}
