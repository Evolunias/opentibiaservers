import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map');
}

export default function Tibia15RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map" />;
}
