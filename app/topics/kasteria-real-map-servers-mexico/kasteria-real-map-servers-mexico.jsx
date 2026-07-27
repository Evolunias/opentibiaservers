import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-mexico');
}

export default function KasteriaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-mexico" />;
}
