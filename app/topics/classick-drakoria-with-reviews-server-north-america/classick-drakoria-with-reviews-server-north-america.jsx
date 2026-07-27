import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-north-america');
}

export default function ClassickDrakoriaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-north-america" />;
}
