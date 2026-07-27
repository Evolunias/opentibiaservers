import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-latin-america');
}

export default function TibijkaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-latin-america" />;
}
