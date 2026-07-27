import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-canada');
}

export default function HarmoniaOtRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-canada" />;
}
