import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-with-reviews-server');
}

export default function Cyntara15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-with-reviews-server" />;
}
