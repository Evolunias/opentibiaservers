import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-guide');
}

export default function EvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="evolera-guide" />;
}
