import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-uk');
}

export default function KasteriaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-uk" />;
}
