import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-98-custom-map-servers');
}

export default function Arcaniarl1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-98-custom-map-servers" />;
}
