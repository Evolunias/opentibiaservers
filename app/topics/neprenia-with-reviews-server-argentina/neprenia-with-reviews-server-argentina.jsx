import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-argentina');
}

export default function NepreniaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-argentina" />;
}
