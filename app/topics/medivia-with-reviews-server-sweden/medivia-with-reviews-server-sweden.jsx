import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-sweden');
}

export default function MediviaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-sweden" />;
}
