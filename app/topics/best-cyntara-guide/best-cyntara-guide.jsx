import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-guide');
}

export default function BestCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-guide" />;
}
