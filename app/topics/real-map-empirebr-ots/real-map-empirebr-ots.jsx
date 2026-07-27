import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-ots');
}

export default function RealMapEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-ots" />;
}
