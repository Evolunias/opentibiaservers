import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-south-america');
}

export default function ElderaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-south-america" />;
}
