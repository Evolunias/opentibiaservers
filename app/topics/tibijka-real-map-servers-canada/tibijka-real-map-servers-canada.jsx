import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-canada');
}

export default function TibijkaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-canada" />;
}
