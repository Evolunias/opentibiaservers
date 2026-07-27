import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-canada');
}

export default function MarolaotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-canada" />;
}
