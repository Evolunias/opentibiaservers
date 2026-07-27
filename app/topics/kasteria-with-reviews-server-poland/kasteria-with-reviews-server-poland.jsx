import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-poland');
}

export default function KasteriaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-poland" />;
}
