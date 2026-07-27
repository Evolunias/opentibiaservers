import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-poland');
}

export default function TibiameWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-poland" />;
}
