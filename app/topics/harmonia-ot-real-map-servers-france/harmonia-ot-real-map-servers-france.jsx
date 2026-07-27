import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-france');
}

export default function HarmoniaOtRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-france" />;
}
