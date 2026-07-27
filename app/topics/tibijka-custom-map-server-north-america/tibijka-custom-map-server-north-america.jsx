import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-north-america');
}

export default function TibijkaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-north-america" />;
}
