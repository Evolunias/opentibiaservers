import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-sweden');
}

export default function FreshStartReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-sweden" />;
}
