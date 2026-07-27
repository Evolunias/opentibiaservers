import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-europe');
}

export default function HarmoniaOtWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-europe" />;
}
