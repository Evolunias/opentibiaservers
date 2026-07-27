import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-mexico');
}

export default function HarmoniaOtCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-mexico" />;
}
