import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-brazil');
}

export default function NepreniaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-brazil" />;
}
