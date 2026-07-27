import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-usa');
}

export default function TibijkaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-usa" />;
}
