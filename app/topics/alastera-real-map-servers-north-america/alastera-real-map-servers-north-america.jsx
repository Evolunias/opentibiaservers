import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-north-america');
}

export default function AlasteraRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-north-america" />;
}
