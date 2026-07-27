import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-brazil');
}

export default function TibiaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-brazil" />;
}
