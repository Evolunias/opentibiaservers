import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-sweden');
}

export default function BlazeraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-sweden" />;
}
