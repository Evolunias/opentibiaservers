import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-uk');
}

export default function EvoluniaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-uk" />;
}
