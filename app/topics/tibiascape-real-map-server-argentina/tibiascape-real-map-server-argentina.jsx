import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-argentina');
}

export default function TibiascapeRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-argentina" />;
}
