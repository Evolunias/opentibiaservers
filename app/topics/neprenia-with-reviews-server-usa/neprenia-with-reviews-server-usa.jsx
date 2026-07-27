import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-usa');
}

export default function NepreniaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-usa" />;
}
