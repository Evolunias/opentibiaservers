import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-latin-america');
}

export default function TibiascapeRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-latin-america" />;
}
