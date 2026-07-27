import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-sweden');
}

export default function TibiantisWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-sweden" />;
}
