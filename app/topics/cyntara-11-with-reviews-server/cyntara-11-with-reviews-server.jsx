import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-with-reviews-server');
}

export default function Cyntara11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-with-reviews-server" />;
}
