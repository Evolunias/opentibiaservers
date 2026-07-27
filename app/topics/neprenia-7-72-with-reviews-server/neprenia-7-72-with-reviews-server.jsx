import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-with-reviews-server');
}

export default function Neprenia772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-with-reviews-server" />;
}
