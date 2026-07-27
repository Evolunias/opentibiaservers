import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-canada');
}

export default function EvoleraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-canada" />;
}
