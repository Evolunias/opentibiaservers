import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-sweden');
}

export default function HarmoniaOtWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-sweden" />;
}
