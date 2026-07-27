import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-latin-america');
}

export default function TibiascapeCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-latin-america" />;
}
