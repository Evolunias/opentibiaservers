import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-reviews-server-europe');
}

export default function ClassickDrakoriaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-reviews-server-europe" />;
}
