import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-brazil');
}

export default function HarmoniaOtWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-brazil" />;
}
