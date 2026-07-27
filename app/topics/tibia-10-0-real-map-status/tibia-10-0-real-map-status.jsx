import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-status');
}

export default function Tibia100RealMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-status" />;
}
