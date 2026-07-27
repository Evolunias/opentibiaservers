import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-rules');
}

export default function ActiveEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-rules" />;
}
