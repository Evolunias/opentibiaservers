import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-mexico');
}

export default function NepreniaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-mexico" />;
}
