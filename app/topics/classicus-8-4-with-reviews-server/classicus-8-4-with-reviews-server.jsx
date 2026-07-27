import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-with-reviews-server');
}

export default function Classicus84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-with-reviews-server" />;
}
