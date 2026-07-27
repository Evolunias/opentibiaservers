import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-rules');
}

export default function LowrateEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-rules" />;
}
