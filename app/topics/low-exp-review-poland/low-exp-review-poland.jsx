import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-poland');
}

export default function LowExpReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-poland" />;
}
