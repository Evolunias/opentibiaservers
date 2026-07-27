import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-brazil');
}

export default function CalmeraOtCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-brazil" />;
}
