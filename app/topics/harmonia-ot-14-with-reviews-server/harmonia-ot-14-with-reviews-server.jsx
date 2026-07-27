import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-with-reviews-server');
}

export default function HarmoniaOt14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-with-reviews-server" />;
}
