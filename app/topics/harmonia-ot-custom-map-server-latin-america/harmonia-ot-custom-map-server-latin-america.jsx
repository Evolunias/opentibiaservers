import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-latin-america');
}

export default function HarmoniaOtCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-latin-america" />;
}
