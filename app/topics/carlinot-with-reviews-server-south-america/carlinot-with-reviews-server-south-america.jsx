import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-south-america');
}

export default function CarlinotWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-south-america" />;
}
