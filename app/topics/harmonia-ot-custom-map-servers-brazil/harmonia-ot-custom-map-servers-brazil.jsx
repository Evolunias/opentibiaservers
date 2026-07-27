import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-brazil');
}

export default function HarmoniaOtCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-brazil" />;
}
