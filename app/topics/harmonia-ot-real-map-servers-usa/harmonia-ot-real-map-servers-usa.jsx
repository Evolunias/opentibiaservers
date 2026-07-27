import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-usa');
}

export default function HarmoniaOtRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-usa" />;
}
