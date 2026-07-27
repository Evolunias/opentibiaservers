import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-reviews');
}

export default function CyntaraReviewsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-reviews" />;
}
