import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-north-america');
}

export default function BlazeraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-north-america" />;
}
