import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-france');
}

export default function MarolaotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-france" />;
}
