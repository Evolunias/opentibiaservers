import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-with-reviews-server');
}

export default function Oldera1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-with-reviews-server" />;
}
