import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-rules');
}

export default function OfficialEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-rules" />;
}
