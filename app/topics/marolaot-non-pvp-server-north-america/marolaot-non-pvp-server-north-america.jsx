import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-north-america');
}

export default function MarolaotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-north-america" />;
}
