import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-custom-map-server');
}

export default function Arcaniarl86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-custom-map-server" />;
}
