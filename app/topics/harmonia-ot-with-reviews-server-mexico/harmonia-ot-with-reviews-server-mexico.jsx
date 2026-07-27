import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-mexico');
}

export default function HarmoniaOtWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-mexico" />;
}
