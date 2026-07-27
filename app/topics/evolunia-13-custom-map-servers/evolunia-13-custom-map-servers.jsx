import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-custom-map-servers');
}

export default function Evolunia13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-custom-map-servers" />;
}
