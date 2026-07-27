import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-status');
}

export default function Tibia14RealMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-status" />;
}
