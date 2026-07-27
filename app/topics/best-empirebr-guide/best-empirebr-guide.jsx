import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-guide');
}

export default function BestEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-guide" />;
}
