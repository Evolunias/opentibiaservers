import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-argentina');
}

export default function TibiascapeRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-argentina" />;
}
