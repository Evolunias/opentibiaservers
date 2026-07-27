import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-guide');
}

export default function LowrateEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-guide" />;
}
