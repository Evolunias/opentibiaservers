import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-uk');
}

export default function FreshStartReviewUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-uk" />;
}
