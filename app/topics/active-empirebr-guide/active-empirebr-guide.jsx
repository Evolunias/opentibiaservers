import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-guide');
}

export default function ActiveEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-guide" />;
}
