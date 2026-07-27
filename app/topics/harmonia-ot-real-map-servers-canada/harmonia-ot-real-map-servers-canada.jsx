import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-canada');
}

export default function HarmoniaOtRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-canada" />;
}
