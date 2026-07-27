import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-north-america');
}

export default function NepreniaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-north-america" />;
}
