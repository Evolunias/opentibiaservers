import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-usa');
}

export default function TibijkaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-usa" />;
}
