import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-mexico');
}

export default function EvoluniaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-mexico" />;
}
