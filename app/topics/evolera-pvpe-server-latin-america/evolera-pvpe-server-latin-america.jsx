import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-latin-america');
}

export default function EvoleraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-latin-america" />;
}
