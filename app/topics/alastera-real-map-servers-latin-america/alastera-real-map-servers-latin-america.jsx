import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-latin-america');
}

export default function AlasteraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-latin-america" />;
}
