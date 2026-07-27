import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-pvpe-server');
}

export default function Carlinot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-pvpe-server" />;
}
