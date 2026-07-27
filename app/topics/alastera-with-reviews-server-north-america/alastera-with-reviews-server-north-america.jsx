import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-north-america');
}

export default function AlasteraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-north-america" />;
}
