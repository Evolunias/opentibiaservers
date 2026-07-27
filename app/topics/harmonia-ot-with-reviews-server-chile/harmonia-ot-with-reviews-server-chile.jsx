import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-chile');
}

export default function HarmoniaOtWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-chile" />;
}
