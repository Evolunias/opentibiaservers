import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-mexico');
}

export default function CalmeraOtCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-mexico" />;
}
