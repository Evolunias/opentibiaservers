import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-usa');
}

export default function HarmoniaOtCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-usa" />;
}
