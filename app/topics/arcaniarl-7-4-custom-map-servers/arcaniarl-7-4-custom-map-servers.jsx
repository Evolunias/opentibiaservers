import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-custom-map-servers');
}

export default function Arcaniarl74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-custom-map-servers" />;
}
