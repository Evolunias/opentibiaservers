import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-south-america');
}

export default function EvoluniaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-south-america" />;
}
