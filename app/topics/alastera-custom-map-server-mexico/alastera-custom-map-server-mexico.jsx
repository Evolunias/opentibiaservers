import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-mexico');
}

export default function AlasteraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-mexico" />;
}
