import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-guide');
}

export default function NoResetEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-guide" />;
}
