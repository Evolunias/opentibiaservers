import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-mexico');
}

export default function SeasonalReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-mexico" />;
}
