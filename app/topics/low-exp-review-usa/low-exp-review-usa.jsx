import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-usa');
}

export default function LowExpReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-usa" />;
}
