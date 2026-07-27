import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-usa');
}

export default function TibijkaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-usa" />;
}
