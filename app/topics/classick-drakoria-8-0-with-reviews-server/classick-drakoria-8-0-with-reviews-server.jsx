import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-with-reviews-server');
}

export default function ClassickDrakoria80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-with-reviews-server" />;
}
