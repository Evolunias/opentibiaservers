import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-custom-map-server');
}

export default function Kasteria86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-custom-map-server" />;
}
