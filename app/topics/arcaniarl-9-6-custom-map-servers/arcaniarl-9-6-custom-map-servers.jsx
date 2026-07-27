import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-custom-map-servers');
}

export default function Arcaniarl96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-custom-map-servers" />;
}
