import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-with-reviews-server');
}

export default function Oldera96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-with-reviews-server" />;
}
