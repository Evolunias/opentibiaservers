import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-poland');
}

export default function HighExpReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-poland" />;
}
