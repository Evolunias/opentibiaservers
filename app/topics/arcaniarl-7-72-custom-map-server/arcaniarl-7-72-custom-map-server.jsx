import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-custom-map-server');
}

export default function Arcaniarl772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-custom-map-server" />;
}
