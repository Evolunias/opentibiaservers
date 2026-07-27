import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-brazil');
}

export default function ClassickDrakoriaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-brazil" />;
}
