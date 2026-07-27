import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-with-reviews-server');
}

export default function Cyntara1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-with-reviews-server" />;
}
