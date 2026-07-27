import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-sweden');
}

export default function RealestaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-sweden" />;
}
