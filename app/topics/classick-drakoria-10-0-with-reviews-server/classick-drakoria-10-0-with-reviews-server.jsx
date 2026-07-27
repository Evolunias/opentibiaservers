import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-with-reviews-server');
}

export default function ClassickDrakoria100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-with-reviews-server" />;
}
