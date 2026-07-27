import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-south-america');
}

export default function TibiameWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-south-america" />;
}
