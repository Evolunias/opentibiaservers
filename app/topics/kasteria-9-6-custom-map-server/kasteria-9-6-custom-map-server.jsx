import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-custom-map-server');
}

export default function Kasteria96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-custom-map-server" />;
}
