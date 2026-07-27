import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-latin-america');
}

export default function TibiantisRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-latin-america" />;
}
