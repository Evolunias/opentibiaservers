import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-custom-map-servers');
}

export default function Evolunia84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-custom-map-servers" />;
}
