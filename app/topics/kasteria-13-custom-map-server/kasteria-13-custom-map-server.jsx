import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-custom-map-server');
}

export default function Kasteria13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-custom-map-server" />;
}
