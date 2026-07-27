import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-germany');
}

export default function NepreniaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-germany" />;
}
