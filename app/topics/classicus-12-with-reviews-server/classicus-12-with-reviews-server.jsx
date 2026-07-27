import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-with-reviews-server');
}

export default function Classicus12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-with-reviews-server" />;
}
