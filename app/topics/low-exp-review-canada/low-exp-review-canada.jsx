import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-canada');
}

export default function LowExpReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-canada" />;
}
