import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-brazil');
}

export default function FreshStartReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-brazil" />;
}
