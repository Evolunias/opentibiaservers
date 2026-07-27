import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-poland');
}

export default function EvoleraPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-poland" />;
}
