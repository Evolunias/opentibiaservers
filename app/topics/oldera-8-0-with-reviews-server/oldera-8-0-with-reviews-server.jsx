import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-with-reviews-server');
}

export default function Oldera80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-with-reviews-server" />;
}
