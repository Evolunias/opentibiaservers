import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-usa');
}

export default function KasteriaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-usa" />;
}
