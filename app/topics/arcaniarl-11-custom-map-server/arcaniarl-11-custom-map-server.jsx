import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-custom-map-server');
}

export default function Arcaniarl11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-custom-map-server" />;
}
