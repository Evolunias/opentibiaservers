import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-uk');
}

export default function LowExpReviewUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-uk" />;
}
