import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-germany');
}

export default function LowExpReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-germany" />;
}
