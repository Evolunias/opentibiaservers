import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-mexico');
}

export default function TibiascapeCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-mexico" />;
}
