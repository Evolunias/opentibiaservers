import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-usa');
}

export default function TibiascapeCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-usa" />;
}
