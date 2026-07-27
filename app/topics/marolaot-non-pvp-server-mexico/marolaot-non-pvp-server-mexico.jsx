import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-mexico');
}

export default function MarolaotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-mexico" />;
}
