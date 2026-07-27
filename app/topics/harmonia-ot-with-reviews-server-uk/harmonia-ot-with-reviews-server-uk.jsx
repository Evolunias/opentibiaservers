import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-uk');
}

export default function HarmoniaOtWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-uk" />;
}
