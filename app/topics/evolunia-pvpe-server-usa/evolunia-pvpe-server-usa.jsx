import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-usa');
}

export default function EvoluniaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-usa" />;
}
