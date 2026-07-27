import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-with-reviews-server');
}

export default function Oldera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-with-reviews-server" />;
}
