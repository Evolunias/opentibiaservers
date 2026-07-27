import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-with-reviews-server');
}

export default function Cyntara96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-with-reviews-server" />;
}
