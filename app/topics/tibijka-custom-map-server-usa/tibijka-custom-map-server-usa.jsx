import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-usa');
}

export default function TibijkaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-usa" />;
}
