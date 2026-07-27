import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-with-reviews-server');
}

export default function Oldera12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-with-reviews-server" />;
}
