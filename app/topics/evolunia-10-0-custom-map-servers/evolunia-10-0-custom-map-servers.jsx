import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-custom-map-servers');
}

export default function Evolunia100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-custom-map-servers" />;
}
