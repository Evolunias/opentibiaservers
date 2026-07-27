import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-guide');
}

export default function EmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="empirebr-guide" />;
}
