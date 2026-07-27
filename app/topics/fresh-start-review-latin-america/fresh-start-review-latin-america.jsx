import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-latin-america');
}

export default function FreshStartReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-latin-america" />;
}
