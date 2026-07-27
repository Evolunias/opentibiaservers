import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-north-america');
}

export default function HarmoniaOtWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-north-america" />;
}
