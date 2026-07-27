import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-usa');
}

export default function TibiascapeCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-usa" />;
}
