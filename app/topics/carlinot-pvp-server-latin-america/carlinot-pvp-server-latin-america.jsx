import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-latin-america');
}

export default function CarlinotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-latin-america" />;
}
