import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-mexico');
}

export default function CarlinotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-mexico" />;
}
