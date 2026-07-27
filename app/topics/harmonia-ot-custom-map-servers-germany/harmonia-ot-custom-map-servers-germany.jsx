import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-germany');
}

export default function HarmoniaOtCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-germany" />;
}
