import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-with-reviews-server');
}

export default function HarmoniaOt12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-with-reviews-server" />;
}
