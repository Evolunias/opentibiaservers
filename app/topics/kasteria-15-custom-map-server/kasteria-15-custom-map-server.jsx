import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-custom-map-server');
}

export default function Kasteria15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-custom-map-server" />;
}
