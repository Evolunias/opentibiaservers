import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-latin-america');
}

export default function CarlinotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-latin-america" />;
}
