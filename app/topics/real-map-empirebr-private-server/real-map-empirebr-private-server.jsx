import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-private-server');
}

export default function RealMapEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-private-server" />;
}
