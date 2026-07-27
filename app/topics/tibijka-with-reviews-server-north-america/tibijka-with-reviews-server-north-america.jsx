import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-north-america');
}

export default function TibijkaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-north-america" />;
}
