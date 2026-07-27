import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-france');
}

export default function CalmeraOtCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-france" />;
}
