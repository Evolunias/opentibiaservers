import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-canada');
}

export default function CarlinotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-canada" />;
}
