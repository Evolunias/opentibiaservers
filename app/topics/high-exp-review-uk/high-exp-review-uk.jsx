import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-uk');
}

export default function HighExpReviewUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-uk" />;
}
