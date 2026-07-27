import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-north-america');
}

export default function EvoleraPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-north-america" />;
}
