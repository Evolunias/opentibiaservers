import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-north-america');
}

export default function TibijkaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-north-america" />;
}
