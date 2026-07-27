import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-latin-america');
}

export default function HarmoniaOtWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-latin-america" />;
}
