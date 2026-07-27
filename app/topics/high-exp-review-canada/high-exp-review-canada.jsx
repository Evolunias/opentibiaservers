import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-canada');
}

export default function HighExpReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-canada" />;
}
