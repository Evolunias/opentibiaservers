import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-pvpe-server');
}

export default function Carlinot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-pvpe-server" />;
}
