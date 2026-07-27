import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-north-america');
}

export default function HarmoniaOtRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-north-america" />;
}
