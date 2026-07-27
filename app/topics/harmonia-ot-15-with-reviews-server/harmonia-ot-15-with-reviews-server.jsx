import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-with-reviews-server');
}

export default function HarmoniaOt15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-with-reviews-server" />;
}
