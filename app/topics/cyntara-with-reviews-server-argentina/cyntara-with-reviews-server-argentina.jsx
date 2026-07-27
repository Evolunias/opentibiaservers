import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-argentina');
}

export default function CyntaraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-argentina" />;
}
