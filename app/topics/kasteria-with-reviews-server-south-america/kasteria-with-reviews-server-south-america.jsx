import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-south-america');
}

export default function KasteriaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-south-america" />;
}
