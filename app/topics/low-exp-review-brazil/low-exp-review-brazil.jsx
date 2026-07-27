import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-brazil');
}

export default function LowExpReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-brazil" />;
}
