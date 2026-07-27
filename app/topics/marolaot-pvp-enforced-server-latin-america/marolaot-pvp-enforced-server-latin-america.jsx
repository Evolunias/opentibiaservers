import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-enforced-server-latin-america');
}

export default function MarolaotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-enforced-server-latin-america" />;
}
