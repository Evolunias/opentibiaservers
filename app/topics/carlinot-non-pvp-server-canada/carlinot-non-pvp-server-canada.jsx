import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-canada');
}

export default function CarlinotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-canada" />;
}
