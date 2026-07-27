import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-usa');
}

export default function HighExpReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-usa" />;
}
