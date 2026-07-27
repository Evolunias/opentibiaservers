import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-custom-map-servers');
}

export default function Arcaniarl81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-custom-map-servers" />;
}
