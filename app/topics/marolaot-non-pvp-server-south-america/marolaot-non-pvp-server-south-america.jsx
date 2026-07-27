import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-south-america');
}

export default function MarolaotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-south-america" />;
}
