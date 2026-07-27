import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-latin-america');
}

export default function CarlinotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-latin-america" />;
}
