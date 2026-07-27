import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-north-america');
}

export default function TibiascapeCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-north-america" />;
}
