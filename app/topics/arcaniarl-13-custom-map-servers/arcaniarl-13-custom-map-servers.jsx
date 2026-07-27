import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-custom-map-servers');
}

export default function Arcaniarl13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-custom-map-servers" />;
}
