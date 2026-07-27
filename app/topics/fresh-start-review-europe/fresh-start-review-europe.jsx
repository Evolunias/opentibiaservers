import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-europe');
}

export default function FreshStartReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-europe" />;
}
