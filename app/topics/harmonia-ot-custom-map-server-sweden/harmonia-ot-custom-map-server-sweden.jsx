import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-sweden');
}

export default function HarmoniaOtCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-sweden" />;
}
