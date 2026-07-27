import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-poland');
}

export default function FreshStartReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-poland" />;
}
