import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-custom-map-servers');
}

export default function Arcaniarl84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-custom-map-servers" />;
}
