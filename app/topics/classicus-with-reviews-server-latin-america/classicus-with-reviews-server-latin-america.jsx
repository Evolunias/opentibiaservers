import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-latin-america');
}

export default function ClassicusWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-latin-america" />;
}
