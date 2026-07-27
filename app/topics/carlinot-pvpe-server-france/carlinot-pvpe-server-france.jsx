import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-france');
}

export default function CarlinotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-france" />;
}
