import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-sweden');
}

export default function CyntaraWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-sweden" />;
}
