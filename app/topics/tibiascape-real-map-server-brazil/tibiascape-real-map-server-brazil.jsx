import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-brazil');
}

export default function TibiascapeRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-brazil" />;
}
