import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-usa');
}

export default function TibiaraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-usa" />;
}
