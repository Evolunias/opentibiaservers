import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-north-america');
}

export default function HarmoniaOtCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-north-america" />;
}
