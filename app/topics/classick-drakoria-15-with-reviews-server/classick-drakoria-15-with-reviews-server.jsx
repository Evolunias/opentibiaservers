import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-with-reviews-server');
}

export default function ClassickDrakoria15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-with-reviews-server" />;
}
