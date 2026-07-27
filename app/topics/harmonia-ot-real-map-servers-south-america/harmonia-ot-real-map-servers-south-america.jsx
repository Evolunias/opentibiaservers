import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-south-america');
}

export default function HarmoniaOtRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-south-america" />;
}
