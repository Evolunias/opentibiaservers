import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-mexico');
}

export default function TibiascapeRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-mexico" />;
}
