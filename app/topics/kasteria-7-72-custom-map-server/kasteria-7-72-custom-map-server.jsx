import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-72-custom-map-server');
}

export default function Kasteria772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-72-custom-map-server" />;
}
