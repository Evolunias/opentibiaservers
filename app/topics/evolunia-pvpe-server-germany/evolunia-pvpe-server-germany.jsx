import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-germany');
}

export default function EvoluniaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-germany" />;
}
