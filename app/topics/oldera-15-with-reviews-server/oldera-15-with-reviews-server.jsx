import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-with-reviews-server');
}

export default function Oldera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-with-reviews-server" />;
}
