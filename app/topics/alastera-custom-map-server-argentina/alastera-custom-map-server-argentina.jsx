import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-argentina');
}

export default function AlasteraCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-argentina" />;
}
