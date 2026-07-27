import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-pvpe-server');
}

export default function Carlinot86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-pvpe-server" />;
}
