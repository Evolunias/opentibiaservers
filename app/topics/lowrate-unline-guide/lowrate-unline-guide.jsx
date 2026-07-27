import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-guide');
}

export default function LowrateUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-guide" />;
}
