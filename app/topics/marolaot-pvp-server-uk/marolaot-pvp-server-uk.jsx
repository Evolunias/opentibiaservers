import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-uk');
}

export default function MarolaotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-uk" />;
}
