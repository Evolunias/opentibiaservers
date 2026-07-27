import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-north-america');
}

export default function TibijkaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-north-america" />;
}
