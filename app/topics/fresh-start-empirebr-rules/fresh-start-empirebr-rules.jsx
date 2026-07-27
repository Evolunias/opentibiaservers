import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-rules');
}

export default function FreshStartEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-rules" />;
}
