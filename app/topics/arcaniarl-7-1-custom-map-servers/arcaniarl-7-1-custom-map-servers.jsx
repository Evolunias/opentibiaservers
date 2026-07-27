import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-custom-map-servers');
}

export default function Arcaniarl71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-custom-map-servers" />;
}
