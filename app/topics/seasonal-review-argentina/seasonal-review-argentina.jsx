import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-argentina');
}

export default function SeasonalReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-argentina" />;
}
