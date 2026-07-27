import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-germany');
}

export default function HighExpReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-germany" />;
}
