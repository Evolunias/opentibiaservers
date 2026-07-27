import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-south-america');
}

export default function EvoleraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-south-america" />;
}
