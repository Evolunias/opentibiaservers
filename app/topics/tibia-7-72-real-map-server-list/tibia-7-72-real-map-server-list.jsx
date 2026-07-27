import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-server-list');
}

export default function Tibia772RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-server-list" />;
}
