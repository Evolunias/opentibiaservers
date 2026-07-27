import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-rules');
}

export default function HighrateEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-rules" />;
}
