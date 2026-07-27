import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-latin-america');
}

export default function TibiascapeCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-latin-america" />;
}
