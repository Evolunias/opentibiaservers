import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-argentina');
}

export default function TibiaraRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-argentina" />;
}
