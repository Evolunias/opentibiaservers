import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-with-reviews-server');
}

export default function Oldera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-with-reviews-server" />;
}
