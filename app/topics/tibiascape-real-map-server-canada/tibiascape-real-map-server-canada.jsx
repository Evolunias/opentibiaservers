import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-canada');
}

export default function TibiascapeRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-canada" />;
}
