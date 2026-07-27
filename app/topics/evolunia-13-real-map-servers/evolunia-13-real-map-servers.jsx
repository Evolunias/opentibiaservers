import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-real-map-servers');
}

export default function Evolunia13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-real-map-servers" />;
}
