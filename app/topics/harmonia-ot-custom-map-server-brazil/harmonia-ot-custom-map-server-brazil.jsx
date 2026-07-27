import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-brazil');
}

export default function HarmoniaOtCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-brazil" />;
}
