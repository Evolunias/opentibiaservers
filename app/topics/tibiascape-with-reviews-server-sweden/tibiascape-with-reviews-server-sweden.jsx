import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-sweden');
}

export default function TibiascapeWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-sweden" />;
}
