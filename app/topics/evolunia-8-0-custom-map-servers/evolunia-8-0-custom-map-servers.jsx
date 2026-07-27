import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-custom-map-servers');
}

export default function Evolunia80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-custom-map-servers" />;
}
