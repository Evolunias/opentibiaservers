import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-mexico');
}

export default function TibiameWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-mexico" />;
}
