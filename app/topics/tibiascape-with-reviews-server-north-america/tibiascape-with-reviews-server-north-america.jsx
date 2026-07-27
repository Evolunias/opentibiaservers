import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-north-america');
}

export default function TibiascapeWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-north-america" />;
}
