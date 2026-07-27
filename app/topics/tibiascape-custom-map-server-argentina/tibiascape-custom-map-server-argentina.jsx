import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-argentina');
}

export default function TibiascapeCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-argentina" />;
}
