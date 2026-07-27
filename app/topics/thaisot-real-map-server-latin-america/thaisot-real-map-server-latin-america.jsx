import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-latin-america');
}

export default function ThaisotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-latin-america" />;
}
