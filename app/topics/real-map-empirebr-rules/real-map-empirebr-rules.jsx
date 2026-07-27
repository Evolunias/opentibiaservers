import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-rules');
}

export default function RealMapEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-rules" />;
}
