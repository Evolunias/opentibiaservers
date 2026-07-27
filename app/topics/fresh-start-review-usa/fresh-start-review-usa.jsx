import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-usa');
}

export default function FreshStartReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-usa" />;
}
