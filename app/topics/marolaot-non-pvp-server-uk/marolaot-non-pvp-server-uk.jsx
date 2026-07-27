import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-uk');
}

export default function MarolaotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-uk" />;
}
