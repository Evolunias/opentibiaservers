import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-with-reviews-server');
}

export default function Rubinot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-with-reviews-server" />;
}
