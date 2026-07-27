import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-with-reviews-server');
}

export default function ClassickDrakoria96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-with-reviews-server" />;
}
