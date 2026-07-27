import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-with-reviews-server');
}

export default function Cyntara71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-with-reviews-server" />;
}
