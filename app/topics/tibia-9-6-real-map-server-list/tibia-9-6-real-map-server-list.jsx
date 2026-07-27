import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-server-list');
}

export default function Tibia96RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-server-list" />;
}
