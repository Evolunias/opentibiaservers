import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-pvpe-server');
}

export default function Carlinot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-pvpe-server" />;
}
