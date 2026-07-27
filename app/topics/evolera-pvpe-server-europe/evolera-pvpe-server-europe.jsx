import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-europe');
}

export default function EvoleraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-europe" />;
}
