import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-uk');
}

export default function HarmoniaOtRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-uk" />;
}
