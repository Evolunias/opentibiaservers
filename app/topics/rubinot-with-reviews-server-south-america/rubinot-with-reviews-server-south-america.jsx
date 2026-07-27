import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-south-america');
}

export default function RubinotWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-south-america" />;
}
