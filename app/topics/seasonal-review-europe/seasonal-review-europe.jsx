import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-europe');
}

export default function SeasonalReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-europe" />;
}
