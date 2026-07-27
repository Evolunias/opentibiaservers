import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-custom-map-servers');
}

export default function Arcaniarl80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-custom-map-servers" />;
}
