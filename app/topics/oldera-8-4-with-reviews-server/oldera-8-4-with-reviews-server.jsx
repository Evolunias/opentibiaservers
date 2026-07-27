import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-with-reviews-server');
}

export default function Oldera84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-with-reviews-server" />;
}
