import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-usa');
}

export default function AlasteraCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-usa" />;
}
