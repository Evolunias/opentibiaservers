import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-custom-map-servers');
}

export default function Evolunia11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-custom-map-servers" />;
}
