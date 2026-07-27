import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-usa');
}

export default function MarolaotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-usa" />;
}
