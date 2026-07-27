import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-canada');
}

export default function TibiascapeRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-canada" />;
}
