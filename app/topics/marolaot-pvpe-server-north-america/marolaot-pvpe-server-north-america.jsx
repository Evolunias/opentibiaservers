import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-north-america');
}

export default function MarolaotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-north-america" />;
}
