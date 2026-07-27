import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-mexico');
}

export default function CalmeraOtCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-mexico" />;
}
