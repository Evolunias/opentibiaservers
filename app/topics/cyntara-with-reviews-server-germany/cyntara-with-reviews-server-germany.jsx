import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-germany');
}

export default function CyntaraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-germany" />;
}
