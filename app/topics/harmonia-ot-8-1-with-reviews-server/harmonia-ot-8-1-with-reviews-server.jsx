import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-with-reviews-server');
}

export default function HarmoniaOt81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-with-reviews-server" />;
}
