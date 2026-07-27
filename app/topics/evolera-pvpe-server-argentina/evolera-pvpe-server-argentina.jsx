import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-argentina');
}

export default function EvoleraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-argentina" />;
}
