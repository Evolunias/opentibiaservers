import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-with-reviews-server');
}

export default function Neprenia13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-with-reviews-server" />;
}
