import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-status');
}

export default function Tibia11RealMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-status" />;
}
