import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-real-map-server-list');
}

export default function Tibia74RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-real-map-server-list" />;
}
