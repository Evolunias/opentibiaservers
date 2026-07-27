import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-europe');
}

export default function KasteriaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-europe" />;
}
