import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-latin-america');
}

export default function HarmoniaOtCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-latin-america" />;
}
