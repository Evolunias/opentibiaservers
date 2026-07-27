import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-canada');
}

export default function HarmoniaOtWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-canada" />;
}
