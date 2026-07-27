import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-latin-america');
}

export default function CarlinotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-latin-america" />;
}
