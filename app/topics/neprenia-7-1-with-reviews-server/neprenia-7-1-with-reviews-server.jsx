import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-with-reviews-server');
}

export default function Neprenia71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-with-reviews-server" />;
}
