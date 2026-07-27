import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-usa');
}

export default function MarolaotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-usa" />;
}
