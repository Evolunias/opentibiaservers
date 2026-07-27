import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-guide');
}

export default function TopEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-guide" />;
}
