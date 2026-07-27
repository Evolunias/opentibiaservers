import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-south-america');
}

export default function MarolaotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-south-america" />;
}
