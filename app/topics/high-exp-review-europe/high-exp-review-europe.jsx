import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-europe');
}

export default function HighExpReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-europe" />;
}
