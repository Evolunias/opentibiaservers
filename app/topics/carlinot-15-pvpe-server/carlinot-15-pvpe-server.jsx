import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-pvpe-server');
}

export default function Carlinot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-pvpe-server" />;
}
