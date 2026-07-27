import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-south-america');
}

export default function TibijkaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-south-america" />;
}
