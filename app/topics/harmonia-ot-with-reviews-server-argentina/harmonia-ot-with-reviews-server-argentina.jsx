import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-argentina');
}

export default function HarmoniaOtWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-argentina" />;
}
