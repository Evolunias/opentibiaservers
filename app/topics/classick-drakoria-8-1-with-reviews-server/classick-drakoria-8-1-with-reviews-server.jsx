import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-with-reviews-server');
}

export default function ClassickDrakoria81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-with-reviews-server" />;
}
