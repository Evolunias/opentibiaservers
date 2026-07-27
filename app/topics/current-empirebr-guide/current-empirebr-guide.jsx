import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-guide');
}

export default function CurrentEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-guide" />;
}
