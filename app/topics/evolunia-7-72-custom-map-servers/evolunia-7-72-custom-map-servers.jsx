import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-custom-map-servers');
}

export default function Evolunia772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-custom-map-servers" />;
}
