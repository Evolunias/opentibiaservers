import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-review-europe');
}

export default function LowExpReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-review-europe" />;
}
