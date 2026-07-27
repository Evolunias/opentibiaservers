import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-pvpe-server');
}

export default function Carlinot11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-pvpe-server" />;
}
