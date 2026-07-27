import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-sweden');
}

export default function HighExpReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-sweden" />;
}
