import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-canada');
}

export default function TibijkaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-canada" />;
}
