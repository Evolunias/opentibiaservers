import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-brazil');
}

export default function TibiaraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-brazil" />;
}
