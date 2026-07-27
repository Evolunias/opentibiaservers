import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-latin-america');
}

export default function HarmoniaOtRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-latin-america" />;
}
