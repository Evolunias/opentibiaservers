import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-rules');
}

export default function CustomEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-rules" />;
}
