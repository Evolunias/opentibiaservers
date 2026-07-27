import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-mexico');
}

export default function KasteriaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-mexico" />;
}
