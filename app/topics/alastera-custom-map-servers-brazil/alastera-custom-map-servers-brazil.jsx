import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-brazil');
}

export default function AlasteraCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-brazil" />;
}
