import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-usa');
}

export default function TibiascapeRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-usa" />;
}
