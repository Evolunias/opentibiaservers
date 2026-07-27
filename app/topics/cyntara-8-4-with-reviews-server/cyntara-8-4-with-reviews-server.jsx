import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-with-reviews-server');
}

export default function Cyntara84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-with-reviews-server" />;
}
