import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-custom-map-servers');
}

export default function Evolunia81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-custom-map-servers" />;
}
