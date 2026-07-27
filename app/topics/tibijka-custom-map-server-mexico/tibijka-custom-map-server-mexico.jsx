import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-mexico');
}

export default function TibijkaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-mexico" />;
}
