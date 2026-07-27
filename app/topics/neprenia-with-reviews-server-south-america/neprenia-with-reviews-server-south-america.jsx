import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-south-america');
}

export default function NepreniaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-south-america" />;
}
