import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-with-reviews-server');
}

export default function ClassickDrakoria772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-with-reviews-server" />;
}
