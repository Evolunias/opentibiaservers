import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-real-map-servers');
}

export default function Evolunia11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-real-map-servers" />;
}
