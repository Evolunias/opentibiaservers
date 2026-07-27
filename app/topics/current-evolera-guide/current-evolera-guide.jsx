import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-guide');
}

export default function CurrentEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-guide" />;
}
