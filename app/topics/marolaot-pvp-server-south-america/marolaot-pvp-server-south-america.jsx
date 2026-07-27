import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-south-america');
}

export default function MarolaotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-south-america" />;
}
