import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-custom-map-servers');
}

export default function Evolunia15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-custom-map-servers" />;
}
