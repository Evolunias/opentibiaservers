import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-argentina');
}

export default function LowExpReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-argentina" />;
}
