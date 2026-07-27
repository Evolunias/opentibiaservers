import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-germany');
}

export default function FreshStartReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-germany" />;
}
