import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-brazil');
}

export default function AlasteraCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-brazil" />;
}
