import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-europe');
}

export default function NepreniaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-europe" />;
}
