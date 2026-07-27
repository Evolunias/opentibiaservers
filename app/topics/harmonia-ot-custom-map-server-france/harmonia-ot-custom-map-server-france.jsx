import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-france');
}

export default function HarmoniaOtCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-france" />;
}
