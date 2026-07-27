import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-with-reviews-server');
}

export default function ClassickDrakoria76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-with-reviews-server" />;
}
