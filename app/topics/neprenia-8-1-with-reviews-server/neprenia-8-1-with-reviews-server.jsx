import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-with-reviews-server');
}

export default function Neprenia81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-with-reviews-server" />;
}
