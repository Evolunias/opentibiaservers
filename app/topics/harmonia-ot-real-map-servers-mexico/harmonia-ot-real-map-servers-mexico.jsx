import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-mexico');
}

export default function HarmoniaOtRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-mexico" />;
}
