import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-rules');
}

export default function NoResetEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-rules" />;
}
