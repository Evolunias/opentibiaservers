import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-germany');
}

export default function MarolaotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-germany" />;
}
