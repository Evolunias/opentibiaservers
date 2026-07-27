import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-custom-map-servers');
}

export default function Arcaniarl11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-custom-map-servers" />;
}
