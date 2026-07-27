import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-latin-america');
}

export default function ClassickDrakoriaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-latin-america" />;
}
