import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-north-america');
}

export default function MediviaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-north-america" />;
}
