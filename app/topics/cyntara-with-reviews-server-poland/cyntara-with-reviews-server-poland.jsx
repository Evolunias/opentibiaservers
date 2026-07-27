import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-reviews-server-poland');
}

export default function CyntaraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-reviews-server-poland" />;
}
