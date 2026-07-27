import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-argentina');
}

export default function FreshStartReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-argentina" />;
}
