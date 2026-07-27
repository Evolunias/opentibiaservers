import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-france');
}

export default function HarmoniaOtRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-france" />;
}
