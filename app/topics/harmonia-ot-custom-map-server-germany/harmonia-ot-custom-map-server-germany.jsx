import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-germany');
}

export default function HarmoniaOtCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-germany" />;
}
