import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-argentina');
}

export default function EvoluniaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-argentina" />;
}
