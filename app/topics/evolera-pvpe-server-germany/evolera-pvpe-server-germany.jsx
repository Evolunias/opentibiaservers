import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-germany');
}

export default function EvoleraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-germany" />;
}
