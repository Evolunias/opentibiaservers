import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-with-reviews-server');
}

export default function Neprenia100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-with-reviews-server" />;
}
