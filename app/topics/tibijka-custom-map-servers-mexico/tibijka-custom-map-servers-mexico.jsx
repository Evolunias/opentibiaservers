import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-mexico');
}

export default function TibijkaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-mexico" />;
}
