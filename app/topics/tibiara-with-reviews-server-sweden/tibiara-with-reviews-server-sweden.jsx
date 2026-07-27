import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-sweden');
}

export default function TibiaraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-sweden" />;
}
