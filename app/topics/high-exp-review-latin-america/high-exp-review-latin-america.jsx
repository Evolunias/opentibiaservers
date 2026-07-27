import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-latin-america');
}

export default function HighExpReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-latin-america" />;
}
