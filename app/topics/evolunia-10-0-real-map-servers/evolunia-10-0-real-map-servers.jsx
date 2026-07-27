import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-real-map-servers');
}

export default function Evolunia100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-real-map-servers" />;
}
