import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-server-list');
}

export default function Tibia86RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-server-list" />;
}
