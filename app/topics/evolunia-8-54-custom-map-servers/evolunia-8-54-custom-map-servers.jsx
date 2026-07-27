import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-custom-map-servers');
}

export default function Evolunia854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-custom-map-servers" />;
}
