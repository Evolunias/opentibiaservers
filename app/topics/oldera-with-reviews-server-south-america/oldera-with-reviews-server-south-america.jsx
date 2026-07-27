import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-south-america');
}

export default function OlderaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-south-america" />;
}
