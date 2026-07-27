import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-sweden');
}

export default function NostaltherWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-sweden" />;
}
