import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-custom-map-server');
}

export default function Arcaniarl74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-custom-map-server" />;
}
