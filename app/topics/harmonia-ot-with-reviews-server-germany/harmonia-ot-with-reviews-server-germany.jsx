import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-germany');
}

export default function HarmoniaOtWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-germany" />;
}
