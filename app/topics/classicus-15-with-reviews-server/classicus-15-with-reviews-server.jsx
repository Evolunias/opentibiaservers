import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-with-reviews-server');
}

export default function Classicus15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-with-reviews-server" />;
}
