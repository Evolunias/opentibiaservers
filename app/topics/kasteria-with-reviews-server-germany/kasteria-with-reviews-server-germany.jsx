import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-germany');
}

export default function KasteriaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-germany" />;
}
