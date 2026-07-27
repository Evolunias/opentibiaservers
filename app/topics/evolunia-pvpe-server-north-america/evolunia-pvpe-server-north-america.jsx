import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-north-america');
}

export default function EvoluniaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-north-america" />;
}
