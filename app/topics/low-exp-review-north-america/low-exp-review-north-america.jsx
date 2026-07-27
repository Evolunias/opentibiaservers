import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-north-america');
}

export default function LowExpReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-north-america" />;
}
