import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-rules');
}

export default function NewEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-rules" />;
}
