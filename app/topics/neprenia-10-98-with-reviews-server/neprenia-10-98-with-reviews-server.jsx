import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-with-reviews-server');
}

export default function Neprenia1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-with-reviews-server" />;
}
