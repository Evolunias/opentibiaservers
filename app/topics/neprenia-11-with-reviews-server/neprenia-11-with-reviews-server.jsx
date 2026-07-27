import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-with-reviews-server');
}

export default function Neprenia11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-with-reviews-server" />;
}
