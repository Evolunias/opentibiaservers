import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-latin-america');
}

export default function NostaltherRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-latin-america" />;
}
