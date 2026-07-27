import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-mexico');
}

export default function TibiascapeCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-mexico" />;
}
