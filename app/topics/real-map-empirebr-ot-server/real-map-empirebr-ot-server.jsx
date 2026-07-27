import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-ot-server');
}

export default function RealMapEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-ot-server" />;
}
