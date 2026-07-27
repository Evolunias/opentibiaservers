import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-mexico');
}

export default function HarmoniaOtCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-mexico" />;
}
