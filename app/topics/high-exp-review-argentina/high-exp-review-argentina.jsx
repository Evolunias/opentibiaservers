import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-argentina');
}

export default function HighExpReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-argentina" />;
}
