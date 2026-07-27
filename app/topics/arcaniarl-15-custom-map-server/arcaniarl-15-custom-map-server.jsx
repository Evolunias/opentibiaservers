import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-custom-map-server');
}

export default function Arcaniarl15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-custom-map-server" />;
}
