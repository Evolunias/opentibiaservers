import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-north-america');
}

export default function HarmoniaOtRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-north-america" />;
}
