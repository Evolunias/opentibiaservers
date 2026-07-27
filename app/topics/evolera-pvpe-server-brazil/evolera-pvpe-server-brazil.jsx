import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-brazil');
}

export default function EvoleraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-brazil" />;
}
