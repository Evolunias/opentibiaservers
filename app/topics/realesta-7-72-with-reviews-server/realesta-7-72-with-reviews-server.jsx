import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-with-reviews-server');
}

export default function Realesta772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-with-reviews-server" />;
}
