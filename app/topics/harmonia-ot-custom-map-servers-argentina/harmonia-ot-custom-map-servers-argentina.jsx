import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-argentina');
}

export default function HarmoniaOtCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-argentina" />;
}
