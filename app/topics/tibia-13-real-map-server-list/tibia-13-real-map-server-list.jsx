import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-server-list');
}

export default function Tibia13RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-server-list" />;
}
