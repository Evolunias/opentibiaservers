import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-canada');
}

export default function AlasteraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-canada" />;
}
