import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-custom-map-servers');
}

export default function Arcaniarl12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-custom-map-servers" />;
}
