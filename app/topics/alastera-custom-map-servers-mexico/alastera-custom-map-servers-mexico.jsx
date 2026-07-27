import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-mexico');
}

export default function AlasteraCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-mexico" />;
}
