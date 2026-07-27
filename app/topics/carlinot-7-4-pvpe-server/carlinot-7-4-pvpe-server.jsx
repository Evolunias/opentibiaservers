import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-pvpe-server');
}

export default function Carlinot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-pvpe-server" />;
}
