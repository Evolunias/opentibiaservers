import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-north-america');
}

export default function NtoStarWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-north-america" />;
}
