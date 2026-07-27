import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-germany');
}

export default function SeasonalReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-germany" />;
}
