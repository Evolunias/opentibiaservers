import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-custom-map-server');
}

export default function Arcaniarl84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-custom-map-server" />;
}
