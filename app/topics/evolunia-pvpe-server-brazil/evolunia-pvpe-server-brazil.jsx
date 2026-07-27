import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-brazil');
}

export default function EvoluniaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-brazil" />;
}
