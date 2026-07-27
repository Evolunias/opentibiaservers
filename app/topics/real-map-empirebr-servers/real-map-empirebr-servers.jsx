import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-servers');
}

export default function RealMapEmpirebrServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-servers" />;
}
