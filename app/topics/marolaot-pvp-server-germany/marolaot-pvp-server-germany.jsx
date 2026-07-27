import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-germany');
}

export default function MarolaotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-germany" />;
}
