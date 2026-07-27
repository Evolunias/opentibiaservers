import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-north-america');
}

export default function KasteriaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-north-america" />;
}
