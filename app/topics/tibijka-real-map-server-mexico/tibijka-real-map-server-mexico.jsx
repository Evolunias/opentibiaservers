import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-mexico');
}

export default function TibijkaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-mexico" />;
}
