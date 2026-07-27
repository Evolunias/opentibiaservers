import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-north-america');
}

export default function TibiascapeCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-north-america" />;
}
