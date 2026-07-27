import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-france');
}

export default function HarmoniaOtWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-france" />;
}
