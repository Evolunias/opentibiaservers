import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-canada');
}

export default function MarolaotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-canada" />;
}
