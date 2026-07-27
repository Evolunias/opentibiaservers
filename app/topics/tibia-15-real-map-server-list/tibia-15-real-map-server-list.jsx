import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-server-list');
}

export default function Tibia15RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-server-list" />;
}
