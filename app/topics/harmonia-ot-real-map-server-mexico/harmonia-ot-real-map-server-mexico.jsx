import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-mexico');
}

export default function HarmoniaOtRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-mexico" />;
}
