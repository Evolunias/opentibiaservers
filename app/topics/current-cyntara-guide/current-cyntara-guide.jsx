import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-guide');
}

export default function CurrentCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-guide" />;
}
