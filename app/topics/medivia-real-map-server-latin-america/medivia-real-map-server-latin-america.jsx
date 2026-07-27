import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-latin-america');
}

export default function MediviaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-latin-america" />;
}
