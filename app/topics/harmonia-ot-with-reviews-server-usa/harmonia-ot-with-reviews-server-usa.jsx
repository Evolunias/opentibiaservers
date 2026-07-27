import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-usa');
}

export default function HarmoniaOtWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-usa" />;
}
