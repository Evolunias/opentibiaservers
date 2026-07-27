import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-usa');
}

export default function TibiascapeRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-usa" />;
}
