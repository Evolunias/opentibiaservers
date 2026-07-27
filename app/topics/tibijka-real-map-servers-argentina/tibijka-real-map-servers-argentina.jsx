import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-argentina');
}

export default function TibijkaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-argentina" />;
}
