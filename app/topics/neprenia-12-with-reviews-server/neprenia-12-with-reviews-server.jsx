import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-with-reviews-server');
}

export default function Neprenia12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-with-reviews-server" />;
}
