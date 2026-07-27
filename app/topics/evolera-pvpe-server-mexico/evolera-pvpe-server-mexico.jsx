import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-mexico');
}

export default function EvoleraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-mexico" />;
}
