import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-poland');
}

export default function ClassickDrakoriaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-poland" />;
}
