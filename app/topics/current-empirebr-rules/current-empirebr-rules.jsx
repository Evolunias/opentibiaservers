import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-rules');
}

export default function CurrentEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-rules" />;
}
