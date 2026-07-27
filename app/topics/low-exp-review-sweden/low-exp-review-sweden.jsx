import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-sweden');
}

export default function LowExpReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-sweden" />;
}
