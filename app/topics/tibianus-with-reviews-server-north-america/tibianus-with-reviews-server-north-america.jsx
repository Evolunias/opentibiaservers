import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-north-america');
}

export default function TibianusWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-north-america" />;
}
