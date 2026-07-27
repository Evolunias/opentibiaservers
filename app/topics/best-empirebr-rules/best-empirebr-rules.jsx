import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-rules');
}

export default function BestEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-rules" />;
}
