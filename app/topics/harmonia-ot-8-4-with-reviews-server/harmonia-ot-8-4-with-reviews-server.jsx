import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-with-reviews-server');
}

export default function HarmoniaOt84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-with-reviews-server" />;
}
