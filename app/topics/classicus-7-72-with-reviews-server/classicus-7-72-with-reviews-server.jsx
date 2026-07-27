import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-with-reviews-server');
}

export default function Classicus772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-with-reviews-server" />;
}
