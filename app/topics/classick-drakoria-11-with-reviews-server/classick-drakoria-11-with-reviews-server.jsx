import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-with-reviews-server');
}

export default function ClassickDrakoria11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-with-reviews-server" />;
}
