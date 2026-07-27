import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-rules');
}

export default function EmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="empirebr-rules" />;
}
