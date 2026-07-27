import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-usa');
}

export default function CyntaraWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-usa" />;
}
