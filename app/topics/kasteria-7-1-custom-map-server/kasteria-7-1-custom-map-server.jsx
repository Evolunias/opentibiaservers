import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-custom-map-server');
}

export default function Kasteria71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-custom-map-server" />;
}
