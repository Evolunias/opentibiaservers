import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-europe');
}

export default function EvoluniaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-europe" />;
}
