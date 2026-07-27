import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-pvpe-server');
}

export default function Carlinot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-pvpe-server" />;
}
