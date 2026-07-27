import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-custom-map-server');
}

export default function Kasteria11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-custom-map-server" />;
}
