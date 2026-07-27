import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-mexico');
}

export default function MarolaotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-mexico" />;
}
