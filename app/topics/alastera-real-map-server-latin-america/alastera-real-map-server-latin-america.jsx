import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-latin-america');
}

export default function AlasteraRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-latin-america" />;
}
