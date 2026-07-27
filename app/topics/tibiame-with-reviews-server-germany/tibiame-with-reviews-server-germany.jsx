import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-germany');
}

export default function TibiameWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-germany" />;
}
