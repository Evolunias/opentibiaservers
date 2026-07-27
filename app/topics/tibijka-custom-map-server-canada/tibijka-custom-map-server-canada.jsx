import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-canada');
}

export default function TibijkaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-canada" />;
}
