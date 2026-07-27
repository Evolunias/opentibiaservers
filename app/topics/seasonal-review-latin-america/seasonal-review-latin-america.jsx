import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-latin-america');
}

export default function SeasonalReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-latin-america" />;
}
