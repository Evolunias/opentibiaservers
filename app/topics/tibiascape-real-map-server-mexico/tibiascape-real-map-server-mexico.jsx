import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-mexico');
}

export default function TibiascapeRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-mexico" />;
}
