import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-with-reviews-server');
}

export default function Oldera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-with-reviews-server" />;
}
