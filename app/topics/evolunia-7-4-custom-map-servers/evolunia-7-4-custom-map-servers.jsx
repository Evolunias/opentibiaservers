import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-custom-map-servers');
}

export default function Evolunia74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-custom-map-servers" />;
}
