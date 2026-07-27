import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-sweden');
}

export default function OriginaltibiaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-sweden" />;
}
