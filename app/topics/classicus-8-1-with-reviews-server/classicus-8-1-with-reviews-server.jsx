import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-with-reviews-server');
}

export default function Classicus81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-with-reviews-server" />;
}
