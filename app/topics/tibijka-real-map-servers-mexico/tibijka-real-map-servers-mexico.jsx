import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-mexico');
}

export default function TibijkaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-mexico" />;
}
