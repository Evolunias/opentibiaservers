import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-mexico');
}

export default function KasteriaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-mexico" />;
}
