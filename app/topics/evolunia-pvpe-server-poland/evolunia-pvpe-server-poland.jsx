import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-poland');
}

export default function EvoluniaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-poland" />;
}
