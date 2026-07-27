import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-with-reviews-server');
}

export default function Neprenia14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-with-reviews-server" />;
}
