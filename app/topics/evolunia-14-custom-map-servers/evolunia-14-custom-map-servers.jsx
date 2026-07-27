import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-custom-map-servers');
}

export default function Evolunia14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-custom-map-servers" />;
}
