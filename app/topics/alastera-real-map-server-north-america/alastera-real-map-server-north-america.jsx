import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-north-america');
}

export default function AlasteraRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-north-america" />;
}
