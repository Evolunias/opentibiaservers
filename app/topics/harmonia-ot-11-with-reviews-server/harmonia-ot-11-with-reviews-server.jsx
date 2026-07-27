import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-with-reviews-server');
}

export default function HarmoniaOt11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-with-reviews-server" />;
}
