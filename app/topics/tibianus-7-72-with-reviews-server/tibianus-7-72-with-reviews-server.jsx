import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-with-reviews-server');
}

export default function Tibianus772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-with-reviews-server" />;
}
