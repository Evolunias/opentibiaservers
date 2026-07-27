import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-brazil');
}

export default function KasteriaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-brazil" />;
}
