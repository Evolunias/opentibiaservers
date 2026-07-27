import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-argentina');
}

export default function AlasteraCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-argentina" />;
}
