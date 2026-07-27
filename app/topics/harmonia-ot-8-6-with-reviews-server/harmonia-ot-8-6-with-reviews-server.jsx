import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-with-reviews-server');
}

export default function HarmoniaOt86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-with-reviews-server" />;
}
