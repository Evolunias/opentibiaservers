import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-pvpe-server');
}

export default function Carlinot81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-pvpe-server" />;
}
