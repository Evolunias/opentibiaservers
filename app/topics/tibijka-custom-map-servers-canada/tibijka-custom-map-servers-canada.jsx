import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-canada');
}

export default function TibijkaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-canada" />;
}
