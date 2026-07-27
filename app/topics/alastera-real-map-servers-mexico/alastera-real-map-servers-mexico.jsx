import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-mexico');
}

export default function AlasteraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-mexico" />;
}
