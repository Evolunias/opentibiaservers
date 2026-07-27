import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-sweden');
}

export default function ClassickDrakoriaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-sweden" />;
}
