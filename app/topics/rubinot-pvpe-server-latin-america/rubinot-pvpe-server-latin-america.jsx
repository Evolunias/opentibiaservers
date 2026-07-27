import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-latin-america');
}

export default function RubinotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-latin-america" />;
}
