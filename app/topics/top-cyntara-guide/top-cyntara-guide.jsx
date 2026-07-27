import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-guide');
}

export default function TopCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-guide" />;
}
