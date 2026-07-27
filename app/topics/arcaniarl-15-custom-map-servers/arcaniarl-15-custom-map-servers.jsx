import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-custom-map-servers');
}

export default function Arcaniarl15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-custom-map-servers" />;
}
