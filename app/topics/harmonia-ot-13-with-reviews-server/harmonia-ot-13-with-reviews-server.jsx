import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-with-reviews-server');
}

export default function HarmoniaOt13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-with-reviews-server" />;
}
