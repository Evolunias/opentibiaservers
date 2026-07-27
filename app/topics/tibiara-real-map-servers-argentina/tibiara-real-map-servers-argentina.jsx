import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-argentina');
}

export default function TibiaraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-argentina" />;
}
