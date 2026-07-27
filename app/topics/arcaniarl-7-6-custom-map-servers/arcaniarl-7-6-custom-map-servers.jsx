import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-custom-map-servers');
}

export default function Arcaniarl76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-custom-map-servers" />;
}
