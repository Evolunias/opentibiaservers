import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-south-america');
}

export default function HarmoniaOtRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-south-america" />;
}
