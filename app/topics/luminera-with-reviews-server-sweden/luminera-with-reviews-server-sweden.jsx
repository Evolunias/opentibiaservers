import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-sweden');
}

export default function LumineraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-sweden" />;
}
