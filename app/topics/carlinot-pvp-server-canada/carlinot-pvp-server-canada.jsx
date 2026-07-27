import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-canada');
}

export default function CarlinotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-canada" />;
}
