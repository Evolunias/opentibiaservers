import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-usa');
}

export default function TibiaraRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-usa" />;
}
