import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-poland');
}

export default function NepreniaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-poland" />;
}
