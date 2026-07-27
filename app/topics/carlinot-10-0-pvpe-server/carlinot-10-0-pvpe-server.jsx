import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-pvpe-server');
}

export default function Carlinot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-pvpe-server" />;
}
