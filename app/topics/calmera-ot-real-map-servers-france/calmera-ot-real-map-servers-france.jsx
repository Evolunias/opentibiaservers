import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-france');
}

export default function CalmeraOtRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-france" />;
}
