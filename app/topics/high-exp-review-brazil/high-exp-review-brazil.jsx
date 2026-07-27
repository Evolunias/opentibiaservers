import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-brazil');
}

export default function HighExpReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-brazil" />;
}
