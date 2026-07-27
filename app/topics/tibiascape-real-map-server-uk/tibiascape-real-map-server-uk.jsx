import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-uk');
}

export default function TibiascapeRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-uk" />;
}
