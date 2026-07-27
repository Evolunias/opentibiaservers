import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-latin-america');
}

export default function LowExpReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-latin-america" />;
}
