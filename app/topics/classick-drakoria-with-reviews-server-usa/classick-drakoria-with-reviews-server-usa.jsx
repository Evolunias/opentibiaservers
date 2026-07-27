import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-usa');
}

export default function ClassickDrakoriaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-usa" />;
}
