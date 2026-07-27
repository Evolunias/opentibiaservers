import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-uk');
}

export default function TibiameWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-uk" />;
}
