import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-with-reviews-server');
}

export default function Neprenia84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-with-reviews-server" />;
}
