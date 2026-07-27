import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-north-america');
}

export default function CarlinotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-north-america" />;
}
