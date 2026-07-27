import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-guide');
}

export default function HighrateEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-guide" />;
}
