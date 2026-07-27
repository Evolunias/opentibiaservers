import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-canada');
}

export default function EvoluniaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-canada" />;
}
