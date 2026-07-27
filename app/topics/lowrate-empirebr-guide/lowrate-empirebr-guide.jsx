import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-guide');
}

export default function LowrateEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-guide" />;
}
