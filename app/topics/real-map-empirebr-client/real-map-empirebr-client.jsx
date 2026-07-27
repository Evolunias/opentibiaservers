import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-client');
}

export default function RealMapEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-client" />;
}
