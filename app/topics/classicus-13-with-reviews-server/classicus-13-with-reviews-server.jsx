import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-with-reviews-server');
}

export default function Classicus13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-with-reviews-server" />;
}
