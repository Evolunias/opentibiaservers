import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-argentina');
}

export default function TibijkaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-argentina" />;
}
