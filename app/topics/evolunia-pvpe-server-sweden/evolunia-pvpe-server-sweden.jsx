import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-sweden');
}

export default function EvoluniaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-sweden" />;
}
