import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-real-map-server-list');
}

export default function Tibia84RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-real-map-server-list" />;
}
