import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-south-america');
}

export default function TibianusWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-south-america" />;
}
