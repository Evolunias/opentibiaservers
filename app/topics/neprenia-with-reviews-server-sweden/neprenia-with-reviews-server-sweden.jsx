import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-sweden');
}

export default function NepreniaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-sweden" />;
}
