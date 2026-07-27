import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-germany');
}

export default function ClassickDrakoriaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-germany" />;
}
