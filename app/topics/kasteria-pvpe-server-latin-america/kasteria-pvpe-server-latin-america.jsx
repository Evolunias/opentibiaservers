import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-latin-america');
}

export default function KasteriaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-latin-america" />;
}
