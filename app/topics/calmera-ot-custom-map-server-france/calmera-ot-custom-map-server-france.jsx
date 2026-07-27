import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-france');
}

export default function CalmeraOtCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-france" />;
}
