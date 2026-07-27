import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-with-reviews-server');
}

export default function Thaisot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-with-reviews-server" />;
}
