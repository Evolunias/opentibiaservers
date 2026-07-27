import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-with-reviews-server');
}

export default function Classicus11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-with-reviews-server" />;
}
