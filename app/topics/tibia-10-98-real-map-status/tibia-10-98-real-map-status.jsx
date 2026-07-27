import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-real-map-status');
}

export default function Tibia1098RealMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-real-map-status" />;
}
