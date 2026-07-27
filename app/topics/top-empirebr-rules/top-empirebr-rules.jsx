import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-rules');
}

export default function TopEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-rules" />;
}
