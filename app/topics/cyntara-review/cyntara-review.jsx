import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-review');
}

export default function CyntaraReviewKeywordPage() {
  return <StaticKeywordPage slug="cyntara-review" />;
}
