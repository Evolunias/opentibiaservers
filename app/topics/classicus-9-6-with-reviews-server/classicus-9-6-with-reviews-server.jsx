import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-with-reviews-server');
}

export default function Classicus96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-with-reviews-server" />;
}
