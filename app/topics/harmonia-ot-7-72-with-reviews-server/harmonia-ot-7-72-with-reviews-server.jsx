import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-with-reviews-server');
}

export default function HarmoniaOt772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-with-reviews-server" />;
}
