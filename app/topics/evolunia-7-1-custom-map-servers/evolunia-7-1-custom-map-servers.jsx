import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-custom-map-servers');
}

export default function Evolunia71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-custom-map-servers" />;
}
