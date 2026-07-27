import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-rules');
}

export default function PopularEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-rules" />;
}
