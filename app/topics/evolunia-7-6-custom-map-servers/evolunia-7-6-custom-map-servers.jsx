import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-custom-map-servers');
}

export default function Evolunia76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-custom-map-servers" />;
}
