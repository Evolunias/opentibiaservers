import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-uk');
}

export default function NepreniaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-uk" />;
}
