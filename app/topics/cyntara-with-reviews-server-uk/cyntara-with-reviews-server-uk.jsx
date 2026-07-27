import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-uk');
}

export default function CyntaraWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-uk" />;
}
