import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-sweden');
}

export default function RealeraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-sweden" />;
}
