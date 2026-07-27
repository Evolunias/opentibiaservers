import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-brazil');
}

export default function MarolaotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-brazil" />;
}
