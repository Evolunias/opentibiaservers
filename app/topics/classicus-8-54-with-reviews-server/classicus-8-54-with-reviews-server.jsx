import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-with-reviews-server');
}

export default function Classicus854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-with-reviews-server" />;
}
