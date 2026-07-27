import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-custom-map-servers');
}

export default function Arcaniarl100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-custom-map-servers" />;
}
