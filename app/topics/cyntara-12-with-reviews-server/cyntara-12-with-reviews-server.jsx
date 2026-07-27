import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-with-reviews-server');
}

export default function Cyntara12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-with-reviews-server" />;
}
