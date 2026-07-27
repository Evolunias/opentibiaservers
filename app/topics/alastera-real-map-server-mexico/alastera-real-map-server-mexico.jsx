import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-mexico');
}

export default function AlasteraRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-mexico" />;
}
