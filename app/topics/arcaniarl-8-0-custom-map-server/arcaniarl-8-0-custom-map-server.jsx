import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-custom-map-server');
}

export default function Arcaniarl80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-custom-map-server" />;
}
