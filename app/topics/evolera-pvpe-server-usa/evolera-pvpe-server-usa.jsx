import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-usa');
}

export default function EvoleraPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-usa" />;
}
