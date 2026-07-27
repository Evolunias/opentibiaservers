import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-6-with-reviews-server');
}

export default function HarmoniaOt76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-6-with-reviews-server" />;
}
