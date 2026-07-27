import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-with-reviews-server');
}

export default function Cyntara80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-with-reviews-server" />;
}
