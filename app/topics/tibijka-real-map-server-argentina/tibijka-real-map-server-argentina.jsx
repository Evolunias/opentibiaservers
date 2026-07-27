import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-argentina');
}

export default function TibijkaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-argentina" />;
}
