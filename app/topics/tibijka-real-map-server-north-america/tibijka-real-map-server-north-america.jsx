import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-north-america');
}

export default function TibijkaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-north-america" />;
}
