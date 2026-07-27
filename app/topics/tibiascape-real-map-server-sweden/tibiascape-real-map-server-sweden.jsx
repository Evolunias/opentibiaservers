import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-sweden');
}

export default function TibiascapeRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-sweden" />;
}
