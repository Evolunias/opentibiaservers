import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-north-america');
}

export default function TibiameWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-north-america" />;
}
