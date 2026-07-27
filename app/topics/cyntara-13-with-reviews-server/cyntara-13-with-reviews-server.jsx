import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-with-reviews-server');
}

export default function Cyntara13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-with-reviews-server" />;
}
