import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-with-reviews-server');
}

export default function ClassickDrakoria14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-with-reviews-server" />;
}
