import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-guide');
}

export default function CurrentYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-guide" />;
}
