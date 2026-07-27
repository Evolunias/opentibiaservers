import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-latin-america');
}

export default function HarmoniaOtRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-latin-america" />;
}
